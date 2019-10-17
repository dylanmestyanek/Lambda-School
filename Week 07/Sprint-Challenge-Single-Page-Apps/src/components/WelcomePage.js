import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .link {
    text-decoration: none;
    background: #97cbd8;
    color: black;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 30px auto 0;
    width: 200px;
    text-align: center;
    transition: all .3s;

    &:hover {
      background: #2b91a9;
      color: white;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeaderStyles>
        <LinkContainer>
          <NavLink className="link" to="/character-list">Characters</NavLink>
          <NavLink className="link" to="/episodes">Episodes</NavLink>
        </LinkContainer>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeaderStyles>
    </section>
  );
}


