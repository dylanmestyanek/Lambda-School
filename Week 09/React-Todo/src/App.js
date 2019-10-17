import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
    }
  }

  componentDidUpdate(){
    localStorage.setItem('tasks', JSON.stringify(this.state.todos))
  }

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
  }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    })
  }

  removeTasks = () => {
    this.setState({
      todos: this.state.todos.filter(item => 
        !item.completed
      )
    })
  }

  render() {
    return (
      <AppContainer>
        <GlobalStyle />
        <FormContainer>
          <h2>To-Do List</h2>
          <TodoForm 
            addTodo={this.addTodo}
            removeTasks={this.removeTasks}
          />
          <TodoList 
            todos={this.state.todos} 
            toggleCompleted={this.toggleCompleted}
          />
        </FormContainer>
      </AppContainer>
    );
  }
}

export default App

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
