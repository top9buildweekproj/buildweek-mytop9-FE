import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../Actions/index';
import { 
    SignupForm, 
    SignupInput, 
    SignupDiv, 
    SignupButton, 
    Signuph3, 
    SignupP,
    LinkDiv
} from './Styles'; // Styled components


class Login extends Component {
    state = {
        user: {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    loginUser = () => {
        this.props.loginUser(this.state.user)
    }

    render() {
        return (
            <>
            <SignupDiv>
                <Signuph3>My Top 9</Signuph3>
                <SignupP>Please Log in</SignupP>
                <SignupForm>
                    <SignupInput
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <SignupInput
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {/* This should login the user */}
                    <SignupButton 
                    type='submit' 
                    onClick={() => this.loginUser(this.state)}>
                    Login</SignupButton>
                    
                </SignupForm>
            </SignupDiv>
            <LinkDiv>
                <Link to='/signup' 
                style={{ textDecoration: 'none', 
                color: '#444444' }}>
                Need to Sign up?
                </Link> {/* takes you to SignUp page */}
            </LinkDiv>
            </>
        )
    }
    
}

export default connect(null, {loginUser})(Login);