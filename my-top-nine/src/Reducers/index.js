import {
    SIGNUP_USER_BEGIN,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../Actions';


// Initial state for store
const initialState = {
    users: [],
    isSigningUp: false,
    isLoggingIn: false,
    isLoggedIn: false,
    error: null
}


// rootreducer for logging in / signin up users
export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGNUP_USER_BEGIN:
            return {
                ...state,
                isSigningUp: true
            }
        
        case SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isSigningUp: false,
                users: action.payload
            }

        case SIGNUP_USER_FAILURE:
            return {
                ...state,
                isSigningUp: false,
                error: action.payload
            }

        case LOGIN_USER_BEGIN:
            return {
                ...state,
                isLoggingIn: true,
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                users: action.payload
            }

        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                error: action.payload
            }

        default:
            return state;
    }
}