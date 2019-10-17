import { SEARCH_LOADING_START, SEARCH_LOADING_SUCCESS, SEARCH_LOADING_FAILURE } from '../actions/searchActions';
import { dummyData } from '../local_data'
const initialState = {
    songList: dummyData,
    loading: false,
    searchList: [],
    error: null
};

export const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_LOADING_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case SEARCH_LOADING_SUCCESS:
            return {
                ...state,
                searchList: payload,
                loading: false
            }
        case SEARCH_LOADING_FAILURE:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}