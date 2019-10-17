import axios from "axios"

export const FETCHING_MOVIES = 'FETCHING_MOVIES' 
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS'
export const FETCHING_FAILURE = 'FETCHING_FAILURE'

export const fetchMovies = () => dispatch => {
    dispatch({ type: FETCHING_MOVIES })
    axios.get("https://ghibliapi.herokuapp.com/films")
        .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err.response}))
}
