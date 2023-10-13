import sys
import pyttsx3

engine = pyttsx3.init()
engine.setProperty('rate', 125)
voices = engine.getProperty('voices')
engine.setProperty('voice', "french")

def say(txt):
    engine.say(txt)
    engine.runAndWait()

say(" ".join(sys.argv[1:]))