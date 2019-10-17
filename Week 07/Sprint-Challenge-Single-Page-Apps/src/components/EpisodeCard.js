import React from "react";
import styled from "styled-components";

const Episode = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: ;
  align-items: center;
  justify-content: space-evenly;
  line-height: 0;
  width: 100%;
  background: #99e599;

    div {
        text-align: left;
        width: 25%;
    }

    .episode {
        width: 45%;
    }
`;

export default function EpisodeCard({ episode }) {
  return  (
    <Episode>
        <div className="episode">
            <p><strong>Episode:</strong> {episode.name}</p>
        </div>
        <div>
            <p><strong>Season:</strong> {episode.episode}</p>
        </div>
        <div>
            <p><strong>Release Date:</strong> {episode.air_date}</p>
        </div>
    </Episode>
  );
}
