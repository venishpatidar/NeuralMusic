from .model import NeuralSongGeneratorModel
import tensorflow as tf
from .NeuralSongGeneratorUtils import *
import numpy as np
import matplotlib.pyplot as plt
from scipy.io.wavfile import write
import path
import uuid

LATENT_DIMENSION = 128
BASE_PATH = './neuralmusicserver/NeuralNetworks/NeuralSongGenerator/Generated/'
SPECTROGRAM_SAVE_DIR = BASE_PATH+'spectrogram/'
AUDIO_SAVE_DIR = BASE_PATH+'audio/'

random_latent_vectors = tf.random.normal(shape=(1, LATENT_DIMENSION))

class SongGenerator:
    def __init__(self,TrainedWeights):
        self.model = NeuralSongGeneratorModel.model(weights=TrainedWeights,latent_dim=LATENT_DIMENSION)  
        ### Parameters ###
        self.fft_size = 4096 # window size for the FFT
        self.step_size = self.fft_size//64 # distance to slide along the window (in time)
        self.spec_thresh = 4 # threshold for spectrograms (lower filters out more noise)
        self.lowcut = 500 # Hz # Low cut for our butter bandpass filter
        self.highcut = 15000 # Hz # High cut for our butter bandpass filter
        # For mels
        self.n_mel_freq_components = 128 # number of mel frequency channels
        self.shorten_factor = 5 # how much should we compress the x-axis (time)
        self.start_freq = 0 # Hz # What frequency to start sampling our melS from 
        self.end_freq = 8000 # Hz # What frequency to stop sampling our melS from

        self.mel_filter, self.mel_inversion_filter = create_mel_filter(fft_size = self.fft_size,
                                                        n_freq_components = self.n_mel_freq_components,
                                                        start_freq = self.start_freq,
                                                        end_freq = self.end_freq)

    def predict(self,Input):
        return self.model.predict(Input)[0]


    def getAudio(self,latentDim):
        assert np.shape(latentDim) ==(1,LATENT_DIMENSION)
        predicted_mel_spectro = self.predict(latentDim)

        filename = str(uuid.uuid4())
        

        fig, ax = plt.subplots(nrows=1,ncols=1, figsize=(20,4))
        cax = ax.matshow(np.float32(predicted_mel_spectro), interpolation='nearest', aspect='auto', cmap=plt.cm.afmhot, origin='lower')
        ax.axis('off')

        fig.savefig(SPECTROGRAM_SAVE_DIR+filename+'.png',bbox_inches='tight',pad_inches = 0)

        mel_inverted_spectrogram = mel_to_spectrogram(predicted_mel_spectro, self.mel_inversion_filter,
                                                        spec_thresh=self.spec_thresh,
                                                        shorten_factor=self.shorten_factor)
        inverted_mel_audio = invert_pretty_spectrogram(np.transpose(mel_inverted_spectrogram), fft_size = self.fft_size,
                                                    step_size = self.step_size, log = True, n_iter = 10)

        scaled = np.int16(inverted_mel_audio/np.max(np.abs(inverted_mel_audio)) * 32767) 

        write(AUDIO_SAVE_DIR+filename+'.wav', 44100, scaled)


        return (filename,AUDIO_SAVE_DIR+filename+'.wav')




   
# NSG = SongGenerator(SONG_GENERATOR_WEIGHTS)
# NSG.getAudio(random_latent_vectors)