import React from 'react';
import axios from "axios"
import CardContainer from "./components/CardContainer"
import Card from "./components/Card"

class App extends React.Component {
 constructor(){
   super();
   this.state={
     user: [],
   }
 }

  componentDidMount(prevState, setState){
    // Call for my GitHub account followers
    axios.get("https://api.github.com/users/dylanmestyanek/followers")
    // Axios call returns an array of followers, then enter a forEach loop,
    // and make an axios call for each user's profile url
    // which returns all information to populate Card.js
    .then(res => res.data.forEach(user => {
      axios.get(user.url)
      .then(res => this.setState({
        user: [...this.state.user, res.data]
      }))
    }))
    .catch(err => console.log("Whoops Followers Broke", err))
    
    // Calls my GitHub profile and returns an object of my account information
    axios.get("https://api.github.com/users/dylanmestyanek")
      .then(res => this.setState({ 
        user: [...this.state.user,  res.data]
      }))
      .catch(err => console.log("Whoops", err))
  }

  render(){
    return (
      <div className="App">
          <CardContainer user={this.state.user} />
      </div>
    );
  }
}

export default App;
