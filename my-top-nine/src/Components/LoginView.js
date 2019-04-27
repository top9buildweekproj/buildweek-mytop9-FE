import React, { Component } from 'react';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Login from './Login';
import { Route } from 'react-router-dom';

class LoginView extends Component {

    render() {
        return(
            <div>
            <Route exact path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/login-page' component={LoginPage} />
            </div>
        )
    }
}

export default LoginView;

// This is the view that holds all of the routing to the Signup / Login pages.