import sys
from .model import NeuralLyricsGeneratorModel
import numpy as np
import io
import path
import os


class LyricsGenerator:
    def __init__(self,CorpusPath,TrainedWeights):


        with open(CorpusPath, encoding="utf-8") as f:
            text = f.read().lower()
        text = text.replace("\n", " ") 
        print("Corpus length:", len(text))


        self.chars = sorted(list(set(text)))
        print("Total chars:", len(self.chars))

        #  Creating mapping
        self.char_indices = dict((c, i) for i, c in enumerate(self.chars))
        self.indices_char = dict((i, c) for i, c in enumerate(self.chars))

        # max len for input sentence
        self.maxLen = 40
        self.model = NeuralLyricsGeneratorModel.model(self.maxLen,len(self.chars),TrainedWeights)  

    def sample(self,preds, temperature=1.0):
        # helper function to sample an index from a probability array
        preds = np.asarray(preds).astype("float64")
        preds = np.log(preds) / temperature
        exp_preds = np.exp(preds)
        preds = exp_preds / np.sum(exp_preds)
        probas = np.random.multinomial(1, preds, 1)
        return np.argmax(probas)


    def predict(self,Input):
        return self.model.predict(Input,verbose=0)[0]


    def getSentence(self,Input,SentenceLen,Diversity=1.2):
        generated=Input
        for i in range(SentenceLen):
            # Creating one hot encoded zeros array 
            x_pred = np.zeros((1,  self.maxLen , len(self.chars)))

            # Replacing 1 at particular indexed position
            for t, char in enumerate(Input):
                x_pred[0, t, self.char_indices[char]] = 1.0
            
            prediciton  = self.predict(x_pred)
            next_index = self.sample(prediciton,0.6)
            next_char = self.indices_char[next_index]
            Input = Input[1:] + next_char
            generated += next_char
        return generated


# NLG = LyricsGenerator()
# print(NLG.getSentence('e kahata hoon jo samajhataa hoon maine d',400))