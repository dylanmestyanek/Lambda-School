import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import EpisodeList from "./components/EpisodeList";
import CharacterInfo from "./components/CharacterInfo"

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(respo => setCharacters(respo.data.results))
      .catch(err => console.log('Failed axios', err));
  }, []);

  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/character-list" exact render={() => 
        <CharacterList characters={characters} />} 
      />
      <Route path="/character-list/:id" exact render={props => 
        <CharacterInfo {...props} characters={characters} />} 
      />      
      <Route path="/episodes" component={EpisodeList} />
    </main>
  );
}
