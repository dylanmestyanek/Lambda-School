import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import { NavLink } from "react-router-dom";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  const { addToSavedList } = props;
 
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  return (
    <div>
      <MovieCard
        title={movie.title}
        director={movie.director}
        metascore={movie.metascore}
        stars={movie.stars}
      />
      <button onClick={() => addToSavedList(
        {title: <NavLink to={`/movies/${movie.id}`} activeStyle={{background: 'pink'}} exact>{movie.title}</NavLink>}
        )} className="save-button">Save</button>
    </div>
  );
}

export default Movie;
