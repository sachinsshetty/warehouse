Dhwani - Medical Agent

Communicate in local language for field events.  Real time translator with Medical Agent to transcribe symptoms to Care provider. 



## Inspiration

During medical emergencies in natural disaster regions. Doctors/Volunteers arrive from different regions.
They have trouble communicating with local people due to language barrier. Time is critical to help diagnose patients. Our project is a companion/local guide with Medical knowledge
## What it does

Provides voice translation into local language for Questionnaires.
Transcribes the local language voice into English, augments the data with additional information based on available patient history.

## How we built it
Used whisper for voice to text Fine-tuned mistral with medical journal information.
## Challenges we ran into
Gathering dataset for medical information
## Accomplishments that we're proud of
Reduce errors and faulty diagnosis
## What we learned

## What's next for Dhwani


docker run -it -p 7860:7860 --platform=linux/amd64 \
	registry.hf.space/gaganyatri-warehouse:latest 

- Reference
  - Medhacks - https://devpost.com/software/dhwani-i69cf2
  - Boost 2 - https://devpost.com/software/bhoomi-idf0ps
  - FutureFest 2024 - https://devpost.com/software/bhoomi-9vgc0w
  - https://huggingface.co/docs/hub/spaces-run-with-docker
