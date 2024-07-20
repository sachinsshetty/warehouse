from gtts import gTTS

def convert_text_to_speech(text_input):
    tts = gTTS(text=text_input, lang='en')
    tts.save("work_order.mp3")
    return "work_order.mp3"
