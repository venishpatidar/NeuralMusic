from .model import NeuralSingerIdentifierModel
import tensorflow as tf
from .NeuralSingerIdentifierUtils import *
import numpy as np
import matplotlib.pyplot as plt
from scipy.io.wavfile import write
import path
import uuid
from scipy.io import wavfile


class SingerIdentifier:
    def __init__(self,TrainedWeights):
        self.model = NeuralSingerIdentifierModel.model(weights=TrainedWeights)  
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

    def getMelSpectro(self,audioFilePath):
        Mel_Of_InputAudio = []
        rate, data = wavfile.read(audioFilePath)
        _,mode = data.shape
        if(mode == 2):
            wav_spectrogram = pretty_spectrogram(
                data[:,0].astype("float64"),# converting data to mono sound i.e data[:,0]
                fft_size=self.fft_size,
                step_size=self.step_size,
                log=True,
                thresh=self.spec_thresh,
            )
            mel_spec = make_mel(wav_spectrogram, self.mel_filter, shorten_factor = self.shorten_factor)

            Mel_Of_InputAudio.append(mel_spec)
        else:
            wav_spectrogram = pretty_spectrogram(
                data.astype("float64"),# converting data to mono sound i.e data[:,0]
                fft_size=self.fft_size,
                step_size=self.step_size,
                log=True,
                thresh=self.spec_thresh,
            )
            mel_spec = make_mel(wav_spectrogram, self.mel_filter, shorten_factor = self.shorten_factor)
            Mel_Of_InputAudio.append(mel_spec)        
        return Mel_Of_InputAudio

    def getSingerVector(self,audioFilePath):
        
        MelSpectrogram = self.getMelSpectro(audioFilePath)
        prediction = self.model.predict(np.array(MelSpectrogram))
        kk = ((int(prediction[0][0]*10000))/100)
        lm = ((int(prediction[0][1]*10000))/100)
        out = {1:kk,2:lm}
        return out




   
# NSI = SingerIdentifier()
# print(NSI.getSingerVector('./114.wav'))