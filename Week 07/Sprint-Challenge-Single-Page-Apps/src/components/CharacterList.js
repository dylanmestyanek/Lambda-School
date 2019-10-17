import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
    background: #97cbd8;
    color: black;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 auto 30px;
    width: 200px;
    text-align: center;
    transition: all .3s;

    &:hover {
      background: #2b91a9;
      color: white;
    }
  }
`;

const CharacterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
`;

export default function CharacterList({ characters }) {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <CharacterPageContainer>
      <LinkContainer>
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/episodes">Episodes</NavLink>
      </LinkContainer>
      <SearchForm characters={characters} setSearchResults={setSearchResults} />
      <CharacterContainer>
        {
          (searchResults.length === 0 ? characters : searchResults).map(character => 
            <CharacterCard key={character.id} character={character} />
          )
        }
      </CharacterContainer>
    </CharacterPageContainer>
  );
}
