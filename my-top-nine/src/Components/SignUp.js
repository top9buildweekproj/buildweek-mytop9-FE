import React, { Component } from 'react';
import Login from './Login';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { 
    SignupForm, 
    SignupInput, 
    SignupDiv, 
    SignupButton, 
    Signuph3, 
    SignupP 
} from './Styles'; // Styled components

class SignUp extends Component {
    // state = {
    //     username: '',
    //     password: '',
    // }

    render() {
        return(
            <SignupDiv>
                <Signuph3>My Top 9</Signuph3>
                <SignupP>Sign up to see your top 9</SignupP>
                <SignupForm>
                    <SignupInput
                        type='text'
                        name='username'
                        placeholder='Username'
                        // value={this.state.username}
                        // onChange={this.handleChange}
                    />

                    <SignupInput
                        type='text'
                        name='password'
                        placeholder='Password'
                        // value={this.state.password}
                        // onChange={this.handleChange}
                    />

                    <SignupButton type='submit'>Sign up</SignupButton>
                    <Route exact path='/login' component={Login} />
                    <Link to='/login' 
                    style={{ textDecoration: 'none',
                    color: '#444444' }}>
                    Already have an account? Login
                    </Link> {/* takes you to Login page */}        
                </SignupForm>
            </SignupDiv>
        )
    }
}

export default SignUp;