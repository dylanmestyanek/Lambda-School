import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    EDITING_START,
    EDITING_SUCCESS,
    EDITNG_FAILURE
} from "../actions"

const initialState = {
    currentUser: {},
    loading: false,
    error: null,
    calorieIntake: null,
    protein: null,
    carbs: null,
    fat: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_SUCCESS:
            const {weight, height, age, exerciseFrequency, goal, male} = action.payload;
            const calorieTotal = male
                    ? Math.ceil(((66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)) * exerciseFrequency) * (1 + goal))
                    : Math.ceil(((655 + (4.35 * weight) + (4.7 * height) - (4.5 * age)) * exerciseFrequency) * (1 + goal))      
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                calorieIntake: calorieTotal,
                protein: Math.floor(calorieTotal * 0.075),
                carbs: Math.floor(calorieTotal * 0.1),
                fat: Math.floor(calorieTotal * 0.033)
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGIN_START:
            return {
                ...state, 
                loading: true,
                error: null,
                currentUser: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                err: action.payload,
                load: false
            }
        case REGISTER_START:
            return {
                ...state,
                loading: true,
                error: null,
                currentUser: {}
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case EDITING_START: 
            return {
                ...state,
                loading: true,
                error: ''
            }
        case EDITING_SUCCESS: 
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case EDITNG_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }
}