import gradio as gr
from moondream import Moondream

# Initialize the Moondream model
model = Moondream()

def process_image(image, prompt):
    # Encode the image
    image_embeds = model.encode_image(image)
    
    # Generate a response based on the image and prompt
    response = model.answer_question(image_embeds, prompt)
    
    return response

# Create the Gradio interface
iface = gr.Interface(
    fn=process_image,
    inputs=[
        gr.Image(type="pil", label="Upload an image"),
        gr.Textbox(label="Enter your prompt")
    ],
    outputs=gr.Textbox(label="Response"),
    title="Moondream Image Understanding",
    description="Upload an image and ask a question about it."
)

# Launch the interface
iface.launch()

