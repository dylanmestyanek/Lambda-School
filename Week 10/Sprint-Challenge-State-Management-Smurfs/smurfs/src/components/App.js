import React from "react";
import "./App.css";


import Form from "./Form"
import SmurfList from "./SmurfList"

const App = () => {
  return (
    <div className="App">
      <h1>Smurf's up!</h1>
      <p>Get it...? Instead of surf's up.. nevermind.</p>
      <Form />
      <SmurfList />
    </div>
  );
}



export default App;
