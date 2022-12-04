from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from .NeuralNetworks.NeuralPiano.NeuralPianoScript import NeuralPiano
from .NeuralNetworks.NeuralLyricsGenerator.NeuralLyricsGeneratorScript import LyricsGenerator
from .NeuralNetworks.NeuralSongGenerator.NeuralSongGeneratorScript import SongGenerator
from .NeuralNetworks.NeuralSingerIdentifier.NeuralSingerIdentifierScript import SingerIdentifier

import numpy as np
import tensorflow as tf
import ast
import os
from django.core.files.storage import FileSystemStorage
from wsgiref.util import FileWrapper
import re
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

NOTES_PATH = './neuralmusicserver/NeuralNetworks/NeuralPiano/notes'
CORPUS_PATH = './neuralmusicserver/NeuralNetworks/NeuralLyricsGenerator/Corpus/Corpus.txt'
TRAINED_WEIGHTS = './neuralmusicserver/NeuralNetworks/NeuralLyricsGenerator/ModelsCheckpoint/LyricsGenerator.h5'
SONG_GENERATOR_WEIGHTS = './neuralmusicserver/NeuralNetworks/NeuralSongGenerator/ModelsCheckpoint/SongGenerator.h5'
SINGER_IDENTIFIER_WEIGHTS = './neuralmusicserver/NeuralNetworks/NeuralSingerIdentifier/ModelsCheckpoint/SingerIdentifier.h5'
NEURAL_PIANO_WEIGHTS = './neuralmusicserver/NeuralNetworks/NeuralPiano/ModelsCheckpoint/weights.hdf5'

NP = NeuralPiano(NOTES_PATH,NEURAL_PIANO_WEIGHTS)
NLG = LyricsGenerator(CORPUS_PATH,TRAINED_WEIGHTS)
NSG = SongGenerator(SONG_GENERATOR_WEIGHTS)
NSI = SingerIdentifier(SINGER_IDENTIFIER_WEIGHTS)


@api_view(['POST'])
@permission_classes([AllowAny])
def NeuralPiano(request):

    PREDICT=[]
    a = request.body
    a = a.decode('utf-8')
    a = ast.literal_eval(a)
    X_KEYS = a['keys']
    PREDICT = NP.getNotes(X_KEYS,len(X_KEYS))

    print(bcolors.OKGREEN + "[+] Resonse generation success to Neural Piano Request" +bcolors.ENDC)
    print(bcolors.OKCYAN + "INPUT = "+str(X_KEYS) + bcolors.ENDC)
    print(bcolors.OKCYAN +"PREDICTION = "+str(PREDICT) + bcolors.ENDC)

    RESPONSE = {
        'predict':PREDICT
    }
    return JsonResponse(RESPONSE)




@api_view(['POST'])
@permission_classes([AllowAny])
def NeuralSingerIdentifier(request):
        # myfile = request.FILES['myfile']
    print(request.FILES['audioFile'])
    audioFile = request.FILES['audioFile']

    fs = FileSystemStorage()
    filename = fs.save(audioFile.name, audioFile)

    uploaded_file_url = fs.url(filename)

    response = NSI.getSingerVector('./'+uploaded_file_url)

    print(bcolors.OKGREEN + "[+] Resonse generation success to Neural Singer Identifier Request" +bcolors.ENDC)
    print(bcolors.OKCYAN + "PREDICTION = "+ str(response) + bcolors.ENDC)

    if(os.path.isfile('./'+uploaded_file_url)):
        os.remove('./'+uploaded_file_url)
        print(bcolors().WARNING+'[-] Removed file at location'+' ./'+uploaded_file_url+bcolors.ENDC)
    return JsonResponse(response)





@api_view(['POST']) 
@permission_classes([AllowAny])
def NeuralLyricsGenerator(request):
    
    a = request.body
    a = a.decode('utf-8')
    a = ast.literal_eval(a)
    aa = NLG.getSentence(str(a.lower()),400)

    print(bcolors.OKGREEN + "[+] Resonse generation success to Neural Lyrics Generator Request" +bcolors.ENDC)
    print(bcolors.OKCYAN + "INPUT = "+str(a) + bcolors.ENDC)
    print(bcolors.OKCYAN +"PREDICTION = "+str(aa) + bcolors.ENDC)

    return JsonResponse({'lyrics':aa})





@api_view(['POST'])
@permission_classes([AllowAny])
def NeuralSongGenerator(request):
    
    a = request.body
    a = a.decode('utf-8')
    a = ast.literal_eval(a)
    a = np.reshape(a,(1,128))
    # print(np.shape(a))
    # print(a)
    
    filename,path = NSG.getAudio(a)                          
    wrapper = FileWrapper(open(path, 'rb'))
    response = HttpResponse(wrapper, content_type='audio/'+filename)
    response['Content-Length'] = os.path.getsize(path)
    
    print(bcolors.OKGREEN + "[+] Resonse generation success to Neural Song Generator Request" +bcolors.ENDC)
    print(bcolors.OKCYAN + "INPUT = "+str(a) + bcolors.ENDC)
    print(bcolors.OKCYAN +"PREDICTION = "+str(filename) + bcolors.ENDC)
    
    if(os.path.isfile(path)):
        os.remove(path)
        print(bcolors().WARNING+'[-] Removed file at location'+ path +bcolors.ENDC)
    return response


@api_view(['POST'])
@permission_classes([AllowAny])
def GetSpectrogram(request):
    
    a = request.body
    a = a.decode('utf-8')
    # print(a)
    BASE_PATH = './neuralmusicserver/NeuralNetworks/NeuralSongGenerator/Generated/'
    SPECTROGRAM_SAVE_DIR = BASE_PATH+'spectrogram/'
    filename = SPECTROGRAM_SAVE_DIR+a+'.png'
    wrapper = FileWrapper(open(filename, 'rb'))
    response = HttpResponse(wrapper, content_type='image/png')
    response['Content-Length'] = os.path.getsize(filename)

    print(bcolors.OKGREEN + "[+] Resonse generation success to Neural Song Generator Spectrogram Request" +bcolors.ENDC)

    if(os.path.isfile(filename)):
        print(bcolors().WARNING+'[-] Removed file at location'+ filename +bcolors.ENDC)
        os.remove(filename)
    return response





@api_view(['GET'])
@permission_classes([AllowAny])
def GetLatentVector(request):
    random_latent_vectors = tf.random.normal(shape=(1, 128))
    random_latent_vectors = np.array(random_latent_vectors)
    smallest = 99
    greatest =0
    for x in random_latent_vectors[0]:
        if x > greatest:
            greatest =x
        if x < smallest:
            smallest = x
    scale = []
    scale.append(smallest)
    i = int(smallest)
    while i<(greatest):
        scale.append(i)
        i+=1
    scale.append(greatest)

    random_latent_vectors = random_latent_vectors.reshape((8,16))
    random_latent_vectors = str(random_latent_vectors)
    random_latent_vectors = re.sub("\[\s+", "[", random_latent_vectors.strip())
    random_latent_vectors = re.sub("\s+]", "]", random_latent_vectors.strip())
    random_latent_vectors = re.sub("\s+", ",", random_latent_vectors.strip())


    response = {'latent_vector':str(random_latent_vectors),'scale':str(scale)}

    print(bcolors.OKGREEN + "[+] Resonse generation success to Neural Song Generator Latent Vector Request" +bcolors.ENDC)
    print(bcolors.OKCYAN +"Response = "+str(response) + bcolors.ENDC)


    return JsonResponse(response)

