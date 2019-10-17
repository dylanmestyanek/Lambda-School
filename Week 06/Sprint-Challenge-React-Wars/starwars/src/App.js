import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Button from "./components/Button";


const App = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  
  const PageTitle = styled.h1`
  text-align: center;
  font-family: 'montserrat', sans-serif;
  font-size: 2.4rem;
  `;
  
  const PageSubTitle = styled.h2`
  text-align: center;
  font-family: 'montserrat', sans-serif;
  font-size: 1.8rem;
  `;

  const ButtonContainer = styled.div`
    width: 250px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: 'montserrat', sans-serif;
      font-size: 1rem;
      background: white;
      border-radius: 5px;
      padding: 3px 10px;
    }
  `;

  const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: space-evenly;
 `;
  
  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
      .then(respo => setPeople(respo.data.results))
      .catch(err => console.log('Come on silly boy', err));
  }, [page]);

  return (
    <>
      <PageTitle>React Wars</PageTitle>
      <PageSubTitle>Episode VI++ : <em>Return of the useEffect()</em></PageSubTitle>
      <ButtonContainer>
        <Button setPage={setPage} page={page} value={-1} text="Back"/>
        <span>Page {page}</span>
        <Button setPage={setPage} page={page} value={1} text="Next"/>
      </ButtonContainer>
      <CardContainer>
        {
          people.map((person, index) => 
            <CharacterCard 
              key={index}
              name={person.name}
              height={person.height}
              mass={person.mass} 
              hairColor={person.hair_color}
              skinColor={person.skin_color}
              eyeColor={person.eye_color}
              birthYear={person.birth_year}
              gender={person.gender}  
              homeworld={person.homeworld}
            />)
        }
      </CardContainer>
    </>
  );
}

export default App;
