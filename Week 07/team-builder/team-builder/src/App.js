import React, { useState } from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";

import Form from "./components/Form";
import Member from "./components/Member";

const GlobalStyle = createGlobalStyle`
  input {
    border: none;
    background: #D9F1FE;
    border-radius: 3px;
  }
`;

function App() {
  const [teamList, setTeamList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState('');

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamList([...teamList, newMember]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <h1>Add Member</h1>
      <Form 
        addNewMember={addNewMember}
      />

      <h2>Team Members:</h2>
      {
        teamList.map(member => 
          <Member member={member} setMemberToEdit={setMemberToEdit} />
        )
      }
      
    </div>
  );
}

export default App;
