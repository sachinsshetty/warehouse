Hugging Face Demo

https://www.docker.com/blog/how-to-run-hugging-face-models-programmatically-using-ollama-and-testcontainers/

https://huggingface.co/docs/hub/spaces

https://huggingface.co/docs/hub/spaces-run-with-docker

Example - 
https://huggingface.co/spaces/SkalskiP/florence-sam

docker run -it -p 7860:7860 --platform=linux/amd64 --gpus all \
	registry.hf.space/skalskip-florence-sam:latest python app.py

https://huggingface.co/spaces/SkalskiP/segment-anything-model-2


