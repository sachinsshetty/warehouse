import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

const ollamaBaseUrl = 'http://localhost:11434/api';

const checkModelExists = async (modelName) => {
  try {
    const response = await axios.post(`${ollamaBaseUrl}/show`, { name: modelName });
    return true; // Model exists
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return false; // Model doesn't exist
    }
    throw error; // Rethrow other errors
  }
};

const pullModel = async (modelName) => {
  const requestBody = {
    name: modelName,
    stream: false
  };

  try {
    const response = await axios.post(`${ollamaBaseUrl}/pull`, requestBody);
    console.log('Model pulled successfully:', response.data);
  } catch (error) {
    console.error('Error pulling model:', error.message);
  }
};

const getOrPullModel = async (modelName) => {
  try {
    const modelExists = await checkModelExists(modelName);
    if (modelExists) {
      console.log(`Model '${modelName}' already exists.`);
    } else {
      console.log(`Model '${modelName}' not found. Pulling...`);
      await pullModel(modelName);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};


function App() {
  const [data, setData] = useState(null);

  // Usage
  getOrPullModel('mistral:latest');



  useEffect(() => {
    axios.get('http://localhost:11434/api/tags')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <>        
      <p className="read-the-docs">
        Warehouse UI
      </p>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  )
}

export default App
