import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useLocalStorage } from "./hooks/useLocalStorage"
import CardContainer from './components/CardContainer';

function App() {
   const [googleData, setGoogleData] = useState(localStorage.getItem('players') 
    ? JSON.parse(localStorage.getItem('players'))
    : []);
   const [storedPlayers, setStoredPlayers] = useLocalStorage('players',[])
  
   useEffect(() => {
    const source = axios.CancelToken.source();
   
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/players", {
          cancelToken: source.token
        });
        setGoogleData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          // request cancelled
        } else {
          throw error;
        }
      }
   
    };
   
    loadData()
   
    return () => {
      source.cancel();
    };
  }, []);

  

   return (
    <div onClick={() => setStoredPlayers(googleData)} className="App">
      <CardContainer googleData={googleData} />
    </div>
  );
}

export default App;