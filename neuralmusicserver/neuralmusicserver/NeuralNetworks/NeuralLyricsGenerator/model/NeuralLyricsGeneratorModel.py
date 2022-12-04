from tensorflow import keras
from tensorflow.keras import layers
import os

def model(maxlen,chars,weights):
    model = keras.Sequential(
        [
            keras.Input(shape=(maxlen, (chars))),
            layers.LSTM(128),
            layers.Dense((chars), activation="softmax"),

        ],
        name="LyricsGenerator",
    )
    optimizer = keras.optimizers.RMSprop(learning_rate=0.01)
    model.compile(loss="categorical_crossentropy", optimizer=optimizer)
    model.load_weights(weights)
    return model