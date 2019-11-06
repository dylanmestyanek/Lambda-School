import { axiosWithAuth } from "../../utils/axiosWithAuth"
import history from "../../history"

// Grabs User's Profile which returns their object of information
// Passes User's object as payload
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const fetchProfile = () => dispatch => {
    dispatch({ type: FETCH_START })
    axiosWithAuth().get("/users/profile")
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
}

// Logs in the user
// Saves Authorization token to localStorage
// Sends user to dashboard
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"
export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    axiosWithAuth().post("/auth/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: LOGIN_SUCCESS })
            history.push("/dashboard")
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.reponse }))
} 

// Registers the user
// Saves authorization token to localStorage
// Sends users to dashboard
export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILURE = "REGISTER_FAILURE"
export const register = credentials => dispatch => {
    dispatch({ type: REGISTER_START})
    axiosWithAuth().post("/auth/register", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({ type: REGISTER_SUCCESS })
            history.push("/dashboard")
        })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err.response }))
}

// Edit's the user's weight && goal
// Passes entire user object as payload
export const EDITING_START = "EDITING_START"
export const EDITING_SUCCESS = "EDITING_SUCCESS"
export const EDITNG_FAILURE = "EDITNG_FAILURE"
export const editGoals = newGoals => dispatch => {
    dispatch({ type: EDITING_START })
    axiosWithAuth().put("/users/profile", newGoals)
        .then(res => dispatch({ type: EDITING_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: EDITNG_FAILURE, payload: err.response}))
}
