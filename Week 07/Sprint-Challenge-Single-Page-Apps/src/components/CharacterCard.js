import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Character = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
  transition: all .3s;

  &:hover {
    transform: scale(1.02);
  }

  img {
    border-radius: 50%;
  }
`;

const linkStyles = {
  textDecoration: "none",
  color: "black"
}

export default function CharacterCard({ character }) {
  return  (
    <>
      <Link to={`/character-list/${character.id}`} style={linkStyles}>
        <Character>
          <img src={character.image} alt="Rick and Morty Toon" />
          <h2>{character.name}</h2>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
        </Character>
      </Link>
    </>
  );
}
