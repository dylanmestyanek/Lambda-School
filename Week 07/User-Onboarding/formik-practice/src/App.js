import React, { useState } from 'react';
import './App.scss';

import FormikLoginForm from "./components/Form";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <FormikLoginForm users={users} setUsers={setUsers} />
      <div className="cards-container">
        {
          users.map((user, index) => <UserCard key={index} user={user} />)
        }
      </div>
    </div>
  );
}

export default App;
