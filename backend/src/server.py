from flask import Flask, request
from speech_to_text import convert_speech_to_text
from text_to_speech import convert_text_to_speech
from database import lookup_work_order

app = Flask(__name__)

@app.route('/api/work_order', methods=['POST'])
def get_work_order():
    voice_input = request.files['voice']
    text_input = convert_speech_to_text(voice_input)
    work_order = lookup_work_order(text_input)
    voice_output = convert_text_to_speech(work_order)
    return voice_output

if __name__ == '__main__':
    app.run()
