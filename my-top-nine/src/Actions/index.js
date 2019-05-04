import axios from 'axios';

export const SIGNUP_USER_BEGIN = 'SIGNUP_USER_BEGIN'
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS'
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE'
export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'
export const GET_CATEGORY = 'GET_CATEGORY'
export const FETCHING_CATEGORY_SUCCESS = 'FETCHING_CATEGORY_SUCCESS'
export const FETCHING_CATEGORY = 'FETCHING_CATEGORY'
export const FETCHING_CATEGORY_ERROR = 'FETCHING_CATEGORY_ERROR'
export const LOGOUT_USER_BEGIN = 'LOGOUT_USER_BEGIN'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'
export const USER_CATEGORY_GETTING = 'USER_CATEGORY_GETTING'
export const USER_CATEGORY_RECEIVED = 'USER_CATEGORY_RECEIVED'
export const USER_CATEGORY_FAILURE = 'USER_CATEGORY_FAILURE'


const headers = { authorization: sessionStorage.getItem('jwt')}


// logic for signing up a new user
export const signupUser = user => dispatch => {
    dispatch({ type: SIGNUP_USER_BEGIN });
    axios
    .post('https://mytopnine.herokuapp.com/register', user)
    .then(res => {
        sessionStorage.setItem('isSignedUp', true)
        dispatch({
            type: SIGNUP_USER_SUCCESS,
            payload: res.data
        })
    }).catch((err) => {
        console.log('test', err);
        dispatch({
        type: SIGNUP_USER_FAILURE,
        payload: err
    })})
}


// logic for logging in the user
export const loginUser = user => dispatch => {

    dispatch({
        type: LOGIN_USER_BEGIN
    })
    axios
    .post('https://mytopnine.herokuapp.com/login', user)
    .then(res => {
        sessionStorage.setItem('jwt', res.data.token);
        sessionStorage.setItem('isLoggedIn', true)
        localStorage.setItem('username', user.username);
        localStorage.setItem('userId', user.id)
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
            sessionStorage.removeItem('isLoggedIn', false)
            sessionStorage.removeItem('jwt')
            sessionStorage.removeItem('isSignedUp')
            localStorage.removeItem('userId')
            localStorage.removeItem('username')

            window.location.reload();
            dispatch({
                type: LOGOUT_USER_SUCCESS,
                payload: res.data
            })})
            .catch(err => dispatch({
                type: LOGOUT_USER_ERROR,
                payload: err
            }));
}

// logic for getting category 

export const getCategory = () => {
    return (dispatch) => {
      dispatch({type: FETCHING_CATEGORY});
      axios
        .get('https://mytopnine.herokuapp.com/categories')
        .then(response => {
           dispatch({type: FETCHING_CATEGORY_SUCCESS, payload: response.data})
        }).catch(err => {
            dispatch({type: FETCHING_CATEGORY_ERROR, payload: `Sorry having some issues loading category, try again! ${err}`})
         });
    }
}

// logic for getting user specific category

export const getUserCategory = userId => dispatch => {
    dispatch({
        type: USER_CATEGORY_GETTING
    })
    axios
    .get(`https://mytopnine.herokuapp.com/users/users/${userId}`, {headers})
    .then(res => {
        console.log(res)
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
