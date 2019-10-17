import React, { useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import { fetchMovies } from "../actions"
import MovieCard from "./MovieCard"

const MovieList = ({ 
    movies, 
    fetchMovies,
    isFetching,
    err
}) => {

    // Fetch Studio Ghibli movie data on load
    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])
    console.dir(err)

    return (
        <MoviesContainer>
        {isFetching && <h2>Finding all Studio Ghibli films for you...</h2>}
        
        {err && 
            <ErrorMessage>
                <h2>{err.status} {err.statusText}</h2>
                <p>Whoops! Something went wrong while attemping to fetch the data!</p>    
            </ErrorMessage>
        }
            {
                // Render a movie card for each object of movie data
                movies.map(movie => {
                   return <MovieCard key={movie.id} movie={movie} />
                })
            }
        </MoviesContainer>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        isFetching: state.isFetching,
        err: state.err
    }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 80%;
    margin: 0 auto;
    background: #3AAED8;
    border-radius: 5px;
`;

const ErrorMessage = styled.div`
    background: #FB8E8E;
    border: 2px solid red;
    border-radius: 5px;
    width: 40%;
    margin: 0 auto;
    font-size: 1.1rem;
`;