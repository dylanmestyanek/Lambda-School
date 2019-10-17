import {
    FETCHING_SMURFS,
    FETCH_SUCCESS,
    FAILURE,
    ADDING_SMURF,
    ADD_SUCCESS,
    DELETING_SMURF,
    DELETE_SUCCESS
} from "../actions"

const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    error: ''
}

const Reducer = (state = initialState, action) => {
    console.log("This is state from the Reducer:", state)
    switch(action.type){
        case FETCHING_SMURFS:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case ADDING_SMURF:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                smurfs: [...state.smurfs, action.payload]
            }
        case DELETING_SMURF:
            return {
                ...state,
                isDeleting: true,
                error: ''
            } 
        case DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                smurfs: state.smurfs.filter(smurf => {
                    return smurf.id !== action.payload
                })
            } 
        case FAILURE:
            return {
                ...state,
                isFetching: false,
                isAdding: false,
                isDeleting: false,
                err: action.payload
            }
        default:
            return state;
    }
}

export default Reducer