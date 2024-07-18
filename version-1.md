Version 1

- Upload image for vegetables/ fruit.
- Provide prompt for research
	- Identify if box contains rotten items
- Result - highlight box to moved


Framework

- Frontend - React PWA using Typescript / Vite
- Backend - Ollama inference with Docker 
  - Python with flask for Additional Prompt Optimisation

Run time 
 - docker compose file with ollama and frontend
	

- Frontend - 

- Single Page
  - Image upload modal
  - Prompt text box
  - Process button
  - Result text box


- Reference
  - openweb-ui like for frontend


- TODO
  - July 18
    - Add Progress Bar - For LLM process and reply - Dont Stream
    - Add model status bar - currently downloaded model, switch model via dropdown
    - First Start - Show progress for default model download
  - July Week 3
    - Text only - mistral
    - Image + Text - Lllava/moondream + mistral
    - Connect to synthetic API/ERP via function call to get status of items
  
- V2
 - Text For Enhanced User / Supervisor or Manager

- v3 
 - Voice Query for real time
 - Connect with handsfree headset to get Info - For floor Workers
