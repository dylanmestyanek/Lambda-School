import React, { useReducer, useState } from 'react';
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import './App.css';
import { initialState, reducer  } from "./reducers/reducer"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [todo, setTodo] = useState('')

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  // Runs dispatch action, adding todo object to initialState of todo isn't empty
  const handleSubmit = (e) => {
    e.preventDefault();
    todo !== '' && dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('');
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <FormContainer>
        <h2>To-Do List</h2>
        <TodoForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          dispatch={dispatch}
          todo={todo}
        />
        <TodoList 
          state={state}
          dispatch={dispatch}
        />
      </FormContainer>
    </AppContainer>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

const AppContainer = styled.div`
  background: #FAF1B9;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2A99D1;
  width: 30%;
  min-height: 50vh;
  border-radius: 5px;
  padding: 50px 0;

  h2 {
    font-size: 3.2rem;
    font-family: 'Montserrat', sans-serif;
  }
`;
