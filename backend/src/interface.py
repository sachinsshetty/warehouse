import requests
import speech_recognition as sr
from playsound import playsound

def send_voice_input():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)

    with open("voice_input.wav", "wb") as f:
        f.write(audio.get_wav_data())

    files = {'voice': open('voice_input.wav', 'rb')}
    response = requests.post('http://localhost:5000/api/work_order', files=files)

    with open('work_order.mp3', 'wb') as f:
        f.write(response.content)

    playsound('work_order.mp3')

if __name__ == '__main__':
    send_voice_input()
