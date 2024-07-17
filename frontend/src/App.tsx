import { useState, useRef  } from 'react'
import axios from 'axios';
import { AxiosError } from 'axios';
import './App.css'

const ollamaBaseUrl = 'http://localhost:11434/api';

const checkModelExists = async (modelName:string) => {
  try {
    await axios.post(`${ollamaBaseUrl}/show`, { name: modelName });
    return true; // Model exists
  } catch (error) {
    if (error instanceof AxiosError && error.response && error.response.status === 404) {
      return false; // Model doesn't exist
    }
    throw error; // Rethrow other errors
  }
};

const pullModel = async (modelName:string) => {
  const requestBody = {
    name: modelName,
    stream: false
  };

  try {
    const response = await axios.post(`${ollamaBaseUrl}/pull`, requestBody);
    console.log('Model pulled successfully:', response.data);
  } catch (error) {
    console.error('Error pulling model:', (error as AxiosError).message);
  }
};

const getOrPullModel = async (modelName:string) => {
  try {
    const modelExists = await checkModelExists(modelName);
    if (modelExists) {
      console.log(`Model '${modelName}' already exists.`);
    } else {
      console.log(`Model '${modelName}' not found. Pulling...`);
      await pullModel(modelName);
    }
  } catch (error) {
    console.error('Error:', (error as AxiosError).message);
  }
};


function App() {
  const [base64StringImage, setbase64StringImage] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);
  const [prompt, setPrompt] = useState('');
  const promptRef = useRef<HTMLInputElement>(null);

// llava-phi3 does not run
  getOrPullModel('moondream:latest');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setbase64StringImage(reader.result.split(',')[1]);
      }
      }
      reader.readAsDataURL(file);
    } else {
      // handle the case where no file was selected
    }    
  };

  const sendImageToOllama = async () => {
    if (!base64StringImage) return;
    setPrompt(promptRef.current?.value || '');

    const requestBody = {
      model: 'moondream',
      messages: [
        {
          role: 'user',
          content: prompt,
          images: [base64StringImage]
        }
      ],
      stream: false
    };

    const ollamaEndpoint = 'http://localhost:11434/api/chat';

    try {
      const response = await axios.post(ollamaEndpoint, requestBody);
      console.log('Image processing result:', response.data.message.content);
      setResponse(response.data.message.content);
      return response.data.message.content;
    } catch (error) {
      console.error('Error processing image:', (error as AxiosError).message);
      throw error;
    }

  };

  return (
    <>
      <p className="read-the-docs">
        Warehouse UI
      </p>
          <input type="text" ref={promptRef} placeholder="Enter your prompt here..." />
          <input type="file" onChange={handleImageUpload} />
          <button onClick={sendImageToOllama}>Upload</button>        

      {response && (
        <div>
          <h2>Response from Ollama:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      
    </>
  )
}

export default App
