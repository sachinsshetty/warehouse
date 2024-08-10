import gradio as gr
import requests
from PIL import Image
import base64
from io import BytesIO

def process_image(file):
    image =  Image.fromarray(file)
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

    prompt = 'describe the image'
    request_body = {
    "model": "llava",
    "messages": [
        {
            "role": "user",
            "content": prompt,
            "images": [img_str]
        }
    ],
    "stream": False
    }

    # Send the request to the REST API
    response = requests.post('http://localhost:11435/api/chat', json=request_body)

    #   Send the base64 encoded image to a REST API
    #response = requests.post('http://localhost:11435/api/generate', json={'model': 'llava', 'prompt': img_str})
    # Check the response status code
    if response.status_code == 200:
        return "Successfully sent the size to the API"
    else:
        return "Failed to send the size to the API"

iface = gr.Interface(fn=process_image, inputs="image", outputs="text")

iface.launch()
