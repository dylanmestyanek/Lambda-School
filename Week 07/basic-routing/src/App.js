import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Home = props => {
  return <h1>Home Component</h1>;
}

const Blog = props => {
  const { goBack } = props.history;
  return <>
    <h1>Blog here</h1>
    <button onClick={goBack}> Back Home </button>
  </>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">


          <Route exact path='/' component={Home} />
  <Route path='/blog' children={(props) => <h1>The Blog!</h1> }/>
      </header>
    </div>
  );
}

export default App;
