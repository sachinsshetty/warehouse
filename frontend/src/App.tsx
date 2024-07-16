import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState(null);

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
