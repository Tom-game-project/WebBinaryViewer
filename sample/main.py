from PIL import Image
import numpy as np
import matplotlib.pyplot as plt


arr = np.zeros((10,10))
img=Image.fromarray(arr,mode="RGB")
img.save(r"sample\sampleimg.png")