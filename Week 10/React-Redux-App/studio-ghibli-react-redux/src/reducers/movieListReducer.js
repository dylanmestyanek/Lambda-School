import {
    FETCHING_MOVIES,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
} from "../actions"

const initialState = {
    movies: [],
    isFetching: false,
    err: ''
}

export const movieListReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_MOVIES:
            return {
                ...state,
                isFetching: true,
                err: ''
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movies: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetching: false,
                err: action.payload
            }
        default:
            return state;
    }
}
