import React, { useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";

import AppleData from "./data";
import Home from "./components/Home";
import NavWrapper from "./components/NavWrapper";

function App() {
  const [data, setData] = useState(AppleData);
  return (
    <div className="App">
      <NavWrapper data={data} />

      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
