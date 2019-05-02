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
export const LOGOUT_USER_BEGIN = 'LOGOUT_USER_BEGIN'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'
export const USER_CATEGORY_GETTING = 'USER_CATEGORY_GETTING'
export const USER_CATEGORY_RECEIVED = 'USER_CATEGORY_RECEIVED'
export const USER_CATEGORY_FAILURE = 'USER_CATEGORY_FAILURE'


const url = ''


// logic for signing up a new user
export const signupUser = user => dispatch => {
    dispatch({
        type: SIGNUP_USER_BEGIN
    })
    axios
    .post('https://mytopnine.herokuapp.com/register', user)
    .then(res => {
        localStorage.setItem('username', user.username);
        localStorage.setItem('isLoggedIn', true)
        window.location.reload();
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: res.data
        })
    })
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
    .post('https://mytopnine.herokuapp.com/login', user)
    .then(res => {
        localStorage.setItem('username', user.username);
        localStorage.setItem('isLoggedIn', true)
        window.location.reload();
        dispatch({
            type: LOGIN_USER_BEGIN,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: LOGIN_USER_FAILURE,
        payload: err
    }))
}

// logic for logging out user
export const logoutUser = user => dispatch => {
    dispatch({
        type: LOGOUT_USER_BEGIN
    })
    axios
    .get('https://mytopnine.herokuapp.com/users')
    .then(res => {
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('username', user.username)
        window.location.reload();
        dispatch({
            type: LOGOUT_USER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: LOGOUT_USER_ERROR,
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

// logic for getting user specific category

export const getUserCategory = userId => dispatch => {
    dispatch({
        type: USER_CATEGORY_GETTING
    })
    axios
    .get(`https://mytopnine.herokuapp.com/users/users/${userId}`)
    .then(res => {
        dispatch({
            type: USER_CATEGORY_RECEIVED,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: USER_CATEGORY_FAILURE,
            payload: err
        })
    })
}
