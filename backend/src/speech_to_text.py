import speech_recognition as sr

def convert_speech_to_text(voice_input):
    r = sr.Recognizer()
    with sr.AudioFile(voice_input) as source:
        audio_data = r.record(source)
        text = r.recognize_google(audio_data)
    return text
