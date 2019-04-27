import React, { Component } from 'react';
import SignUp from './SignUp';
import Login from './Login';
import { Route } from 'react-router-dom';

class LoginView extends Component {

    render() {
        return(
            <div>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            </div>
        )
    }
}

export default LoginView;

// This is the view that holds all of the routing to the Signup / Login pages.