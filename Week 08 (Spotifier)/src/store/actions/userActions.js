import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const SAVED_LOADING_START = "SAVED_LOADING_START";
export const SAVED_LOADING_SUCCESS = "SAVED_LOADING_SUCCESS";
export const SAVED_LOADING_FAILURE = "SAVED_LOADING_FAILURE";
export const getSaved = () => dispatch => {
    dispatch({ type: SAVED_LOADING_START });
    axiosWithAuth().get(`/tracks/savedtracks`)
        .then(({data}) => {
            let trackList = data.map(track => ({...track, track_id: track.trackid, duration_ms: track.duration }))
            dispatch({type: SAVED_LOADING_SUCCESS, payload: trackList})
            })
        .catch(err => {
                dispatch({ type: SAVED_LOADING_FAILURE, payload: err })
                if (err.response.status === 401) window.localStorage.removeItem('token')
            })
}

export const ADD_SAVED_START = "ADD_SAVED_START";
export const ADD_SAVED_SUCCESS = "ADD_SAVED_SUCCESS";
export const ADD_SAVED_FAILURE = "ADD_SAVED_FAILURE";
export const addToSaved = track => dispatch => {
    dispatch({ type: ADD_SAVED_START })
    axiosWithAuth().post(`/tracks/save/${track.track_id}`)
        .then(() => dispatch({ type: ADD_SAVED_SUCCESS, payload: track } ))
        .catch(err => dispatch({ type: ADD_SAVED_FAILURE, payload: err }))
}

export const DELETE_SAVED_START = "DELETE_SAVED_START";
export const DELETE_SAVED_SUCCESS = "DELETE_SAVED_SUCCESS";
export const DELETE_SAVED_FAILURE = "DELETE_SAVED_FAILURE";
export const deleteFromSaved = track => dispatch => {
    dispatch({ type: DELETE_SAVED_START })
    axiosWithAuth().delete(`/tracks/remove/${track.track_id}`)
        .then(() => dispatch({ type: DELETE_SAVED_SUCCESS, payload: track }))
        .catch(err => dispatch({ type: DELETE_SAVED_FAILURE, payload: err }))
}

export const LOGIN_LOADING_START = "LOGIN_LOADING_START";
export const LOGIN_LOADING_SUCCESS = "LOGIN_LOADING_SUCCESS";
export const LOGIN_LOADING_FAILURE = "LOGIN_LOADING_FAILURE";
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_LOADING_START });
    axios.post(`https://spotify-song-suggester.herokuapp.com/login`, `grant_type=password&username=${creds.username}&password=${creds.password}`, {
        headers: {
            Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(res => {
            dispatch({ type: LOGIN_LOADING_SUCCESS, payload: { username: creds.username, token: res.data.access_token }})
            
        })
        .catch(err => dispatch({ type: LOGIN_LOADING_FAILURE, payload: err }))
}

export const REGISTER_LOADING_START = "REGISTER_LOADING_START";
export const REGISTER_LOADING_SUCCESS = "REGISTER_LOADING_SUCCESS";
export const REGISTER_LOADING_FAILURE = "REGISTER_LOADING_FAILURE";
export const register = creds => dispatch => {
    dispatch({ type: REGISTER_LOADING_START });
    axios.post(`https://spotify-song-suggester.herokuapp.com/createnewuser`, creds)
        .then(res => dispatch({type: REGISTER_LOADING_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: REGISTER_LOADING_FAILURE, payload: err }))
}



export const LOGOUT_USER_START = "LOGOUT_USER_START";
export const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "LOGOUT_USER_FAILURE";
export const logout = () => dispatch => {
    dispatch({type: LOGOUT_USER_START});
    axiosWithAuth().get('/oauth/revoke-token')
        .then(res => dispatch({type: LOGOUT_USER_SUCCESS}))
        .catch(err => dispatch({type: LOGOUT_USER_FAILURE}))
    window.localStorage.removeItem('token')
}