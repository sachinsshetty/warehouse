VLLM setup

- Create HF token

- add environment variable - HF_TOKEN

- start vllm docker 
	- docker compose -f vllm-compose.yml up -d

- Test API endpoint 

	`
	curl http://localhost:8000/v1/completions \
	-H "Content-Type: application/json" \
	-d '{
	  "model": "mistralai/Mistral-7B-v0.3",
	  "prompt": "San Francisco is a",
	  "max_tokens": 7,
	  "temperature": 0
	}'
	`


- moondream not supported


- Quantized Weights
  - https://huggingface.co/neuralmagic
  - https://huggingface.co/neuralmagic/Mistral-7B-Instruct-v0.3-GPTQ-4bit
  - https://huggingface.co/neuralmagic/Mistral-7B-Instruct-v0.3-quantized.w8a16

- Llava
  - https://huggingface.co/llava-hf
  - llava-hf/llava-v1.6-mistral-7b-hf
