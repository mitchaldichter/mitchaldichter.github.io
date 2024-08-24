import os
from PIL import Image
 
px = 154
pic = Image.open(str(px) + ".png")

for filename in os.listdir("input"):
  cover = Image.open("input/" + filename)
  cover.paste(pic, (1280-px,720-px))
  cover.save("output/" + filename[:-4] + "png", quality=100)
  #cover.save("output/" + filename, quality=100)