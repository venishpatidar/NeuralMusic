from tensorflow import keras
from tensorflow.keras import layers
import os

def model(weights,latent_dim = 128):
    generator = keras.Sequential(
        [
            keras.Input(shape=(latent_dim,)),
            layers.Dense(16 * 171 * 128),
            layers.Reshape((16, 171, 128)),
            layers.Conv2DTranspose(128, kernel_size=4, strides=2, padding="same"),
            layers.LeakyReLU(alpha=0.2),
            layers.Conv2DTranspose(256, kernel_size=4, strides=2, padding="same"),
            layers.LeakyReLU(alpha=0.2),
            layers.Conv2DTranspose(256, kernel_size=4, strides=2, padding="same"),
            layers.LeakyReLU(alpha=0.2),
            layers.Conv2D(1, kernel_size=5, padding="same", activation="linear"),
            layers.Reshape((128,1368))
        ],
        name="SongGenerator",
    )
    generator.load_weights(weights)
    return generator