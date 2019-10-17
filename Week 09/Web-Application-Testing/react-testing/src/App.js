import React from 'react';
import './App.css';

import DashBoard from "./components/Dashboard"

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <DashBoard />
        
      </div>
    );
  }
}

export default App;
