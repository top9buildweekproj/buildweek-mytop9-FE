import axios from 'axios';

export const SIGNUP_USER_BEGIN = 'SIGNUP_USER_BEGIN'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const GET_CATEGORY = 'GET_CATEGORY'
export const FETCHING = 'FETCHING'
export const ERROR = 'ERROR'


const url = ''


// logic for signing up a new user
export const signupUser = user => dispatch => {
    dispatch({
        type: SIGNUP_USER_BEGIN
    })
    axios
    .post('https://mytopnine.herokuapp.com/users', user)
    .then(res => dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: SIGNUP_USER_FAILURE,
        payload: err
    }))
}


// logic for logging in the user
export const loginUser = user => dispatch => {
    dispatch({
        type: LOGIN_USER_BEGIN
    })
    axios
    .post('https://mytopnine.herokuapp.com/users', user)
    .then(res => dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: LOGIN_USER_FAILURE,
        payload: err
    }))
}

// logic for getting category 

export const getCategory = () => {
  return(dispatch) => {
    dispatch({type: FETCHING});
    axios
      .get(url)
      .then(response => {
        dispatch({type: GET_CATEGORY, categories: response.data})  
      })
      .catch(err => {
         dispatch({type: ERROR, error: 'Sorry having some issues loading category, try again!'})
      } );
  }
}