import React from 'react';
import './App.css';
import styled from "styled-components"

import MovieList from "./components/MovieList"

function App() {
  return (
    <AppContainer>
     <h1>Studio Ghibli Films</h1>
     <MovieList />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  background: #2BD9FE;
  margin: 0;
  padding: 0;

  h1 {
    padding-top: 20px;
  }
`; 

