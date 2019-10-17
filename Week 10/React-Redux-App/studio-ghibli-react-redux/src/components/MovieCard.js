import React from "react"
import styled from "styled-components"

const MovieCard = ({ movie }) => {
    return (
        <MovieInfo>
            <h2>{movie.title}</h2>
            <p>Year released: {movie.release_date}</p>
            <p>{movie.description}</p>
            <p>Directed By: {movie.director}</p>
            <p>Produced By: {movie.producer}</p>
        </MovieInfo>
    )
}

export default MovieCard

const MovieInfo = styled.div`
    background: #52AA8A;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 25%;
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid #388659;
`;