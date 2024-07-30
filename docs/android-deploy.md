Deploy on Android


- git clone https://github.com/googlesamples/mediapipe
- cd mediapipe
- git sparse-checkout init --cone
- git sparse-checkout set examples/llm_inference/android


- Start android studio
- Import project into android studio

- Download the model - gemma-2b

- Copy model to device using device explorer
	- https://developer.android.com/studio/debug/device-file-explorer

- Model download at
  - https://www.kaggle.com/models/google/gemma/tfLite/

- https://developers.googleblog.com/en/large-language-models-on-device-with-mediapipe-and-tensorflow-lite/

- https://colab.research.google.com/github/googlesamples/mediapipe/blob/main/examples/llm_inference/conversion/llm_conversion.ipynb
- https://github.com/google-ai-edge/mediapipe-samples/blob/main/examples/llm_inference/conversion/llm_conversion.ipynb



reference
- https://github.com/google-ai-edge/mediapipe-samples
- https://www.tensorflow.org/lite/examples
- https://ai.google.dev/edge/lite
- https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference

- https://ai.google.dev/edge/mediapipe/solutions/genai/llm_inference/android
- https://ai.google.dev/edge/mediapipe/solutions/setup_android#example_code

- https://llm.mlc.ai/

