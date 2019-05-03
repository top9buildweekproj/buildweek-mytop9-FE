import {
    SIGNUP_USER_BEGIN,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_BEGIN,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    USER_CATEGORY_GETTING,
    USER_CATEGORY_RECEIVED,
    USER_CATEGORY_FAILURE,

    FETCHING_CATEGORY_SUCCESS,
    FETCHING_CATEGORY_ERROR
  } from '../Actions';


// Initial state for store
const initialState = {
    users: [],
    userCategories: [],
    userId: null,
    isSigningUp: false,
    isLoggingIn: false,
    isLoggedIn: false,
    isGettingUserCategories: false,
    error: null,
    categories: [],
    
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

        case LOGOUT_USER_BEGIN:
            return {
                ...state,
                isLoggedIn: true,
                users: action.payload
            }

        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                users: action.payload
            }

        case LOGOUT_USER_ERROR:
            return {
                ...state,
                isLoggedIn: true,
                error: action.payload
            }

        case USER_CATEGORY_GETTING:
            return {
                ...state,
                isGettingUserCategories: true,
                error: null
            }

        case USER_CATEGORY_RECEIVED:
        return {
            ...state,
            isGettingUserCategories: false,
            userCategories: action.payload
        }

        case USER_CATEGORY_FAILURE:
        return {
            ...state,
            error: action.payload
        }
        case FETCHING_CATEGORY_SUCCESS:
            return {
                ...state, 
                categories: action.payload
                
            }

        case FETCHING_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload
            }
    

        default:
            return state;
    }
}