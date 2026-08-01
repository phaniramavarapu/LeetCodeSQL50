# test_pyttsx3.py
import pyttsx3

def main():
    engine = pyttsx3.init()
    engine.say("Testing Pyttsx3")
    engine.runAndWait()

if __name__ == "__main__":
    main()