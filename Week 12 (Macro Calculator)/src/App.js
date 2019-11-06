import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux"
import { store } from "./index"

import "./App.css";
import SignUp from "./component/SignUp/SignUp"
import Login from "./component/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard"
import Meals from "./component/Meal/Meals"
import { PrivateRoute } from "./component/PrivateRoute"

function App() {
  return (
    <>
   <Route  exact path="/" component={Login} />
      <Route exact path="/SignUp" render={props => 
        <Provider store={store}>
          <SignUp {...props} />
        </Provider> 
        }/>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/Meals" component={Meals} />
   </>
  );
}

export default App;
