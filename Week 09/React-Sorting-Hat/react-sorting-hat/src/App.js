import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      isSorting: true
    }
  }

  render() {
    return (
      <>
        {this.state.isSorting ?
          <div className="greeting">
          <h1>Welcome to Hogwarts!</h1>
          <button>Begin Sorting Process</button>
        </div>
        :
        <div>

        </div>
        }
      </>
    );
  }
}

export default App;
