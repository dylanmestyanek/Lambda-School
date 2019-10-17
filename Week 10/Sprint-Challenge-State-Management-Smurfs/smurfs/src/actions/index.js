import axios from "axios"

export const FETCHING_SMURFS = "FETCHING_SMURFS"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FAILURE = "FETCH_FAILURE" 

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    axios.get("http://localhost:3333/smurfs")
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FAILURE, payload: err.response }))
}

export const ADDING_SMURF = "ADDING_SMURF"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const addSmurf = (smurfData) => dispatch => {
    dispatch({ type: ADDING_SMURF })
    axios.post("http://localhost:3333/smurfs", smurfData)
        .then(res => dispatch({ type: ADD_SUCCESS, payload: smurfData }))
        .catch(err => dispatch({ type: FAILURE, error: err.response}))
}

export const DELETING_SMURF = "DELETING_SMURF"
export const DELETE_SUCCESS = "DELETE_SUCCESS" 
export const removeSmurf = (id) => dispatch => {
    dispatch({ type: DELETING_SMURF })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => dispatch({ type: DELETE_SUCCESS, payload: id }))
        .catch(err => dispatch({ type: FAILURE, error: err.response}))
}
