from tensorflow import keras
from tensorflow.keras import layers

def model(weights):
    discriminator = keras.Sequential(
    [
        keras.Input(shape=(128,1368)),
        layers.Reshape((128,1368,1)),
        layers.Conv2D(128, kernel_size=4, strides=2, padding="same"),
        layers.LeakyReLU(alpha=0.2),
        layers.Conv2D(256, kernel_size=4, strides=2, padding="same"),
        layers.LeakyReLU(alpha=0.2),
        layers.Conv2D(256, kernel_size=4, strides=2, padding="same"),
        layers.LeakyReLU(alpha=0.2),
        layers.Flatten(),
        layers.Dropout(0.2),
        layers.Dense(2, activation="sigmoid"),
    ],
    name="discriminator"
    )
    discriminator.load_weights(weights)
    return discriminator