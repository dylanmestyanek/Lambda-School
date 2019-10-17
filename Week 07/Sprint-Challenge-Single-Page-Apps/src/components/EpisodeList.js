import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import EpisodeCard from "./EpisodeCard";

const EpisodePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .homeLink {
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

const EpisodeContainer = styled.section`
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

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [seasonOne, setSeasonOne] = useState([]);
  const [seasonTwo, setSeasonTwo] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode")
      .then(respo => setEpisodes(respo.data.results))
      .catch(err => console.log('Failed axios', err));
  }, []);

  useEffect(() => {
    setSeasonOne(episodes.filter(episode => episode.episode.includes('S01')));
    setSeasonTwo(episodes.filter(episode => episode.episode.includes('S02')));
  }, [episodes]);

  return (
    <EpisodePageContainer>
       <LinkContainer>
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/character-list">Characters</NavLink>
        </LinkContainer>
      <EpisodeContainer>
          <h2> Season 1 </h2>
        {
            seasonOne.map(episode => 
                <EpisodeCard key={episode.id} episode={episode} />
          )
        }
            <h2> Season 2 </h2>
        {
            seasonTwo.map(episode => 
                <EpisodeCard key={episode.id} episode={episode} />
          )
        }
      </EpisodeContainer>
    </EpisodePageContainer>
  );
}
