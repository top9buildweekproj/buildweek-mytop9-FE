import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signupUser } from '../Actions/index';
import { 
    SignupForm, 
    SignupInput, 
    SignupDiv, 
    SignupButton, 
    Signuph3, 
    SignupP,
    LinkDiv
} from './Styles'; // Styled components

class SignUp extends Component {
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

    toggleIsSigningUp = () => {
        this.setState({isSigningUp: !this.state.isSigningUp})
    }

    signupUser = () => {
        this.props.signupUser(this.state.user)
    }


    render() {
        return(
            <>
            <SignupDiv>
                <Signuph3>My Top 9</Signuph3>
                <SignupP>Sign up to see your top 9</SignupP>
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
                    {/* this should create a new account */}
                    <SignupButton 
                    type='submit'
                    onClick={() => this.props.signupUser(this.state)}>
                    Sign up</SignupButton>       
                </SignupForm>
            </SignupDiv>
            <LinkDiv>
                <Route exact path='/login' component={Login} />
                <Link to='/login' 
                style={{ textDecoration: 'none',
                color: '#444444' }}>
                Already have an account? Login
                </Link> {/* takes you to Login page */} 
            </LinkDiv>
            </>
        )
    }
}

const mapStateToProps = state => ({
    isSigningUp: state.isSigningUp
})

export default connect(mapStateToProps, {signupUser})(SignUp);