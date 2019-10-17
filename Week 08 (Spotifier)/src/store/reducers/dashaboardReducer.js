import {
    DASHBOARD_LOADING_START,
    DASHBOARD_LOADING_SUCCESS,
    DASHBOARD_LOADING_FAILURE,
} from '../actions/dashboardActions'

const initialState = {
    currentSong: null,
    loading: false,
    error: null,
    similiarTracks: []
};

export const dashboardReducer = (state = initialState, { type, payload }) => {


    switch (type) {

        case DASHBOARD_LOADING_START:
            return {
                ...state,
                currentSong: payload,
                loading: true,
                error: null,
                similiarTracks: []
            }
        case DASHBOARD_LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                similiarTracks: payload,
            }
        case DASHBOARD_LOADING_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}