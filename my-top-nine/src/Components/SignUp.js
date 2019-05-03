import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            username: '',
            password: '',
    }

    handleChange = e => {
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value
        })
    }

    toggleIsSigningUp = () => {
        this.setState({isSigningUp: !this.state.isSigningUp})
    }

    signupUser = () => {
        this.props.signupUser(this.state)
    }


    render() {
        return(
            <>
            <SignupDiv>
                <Signuph3>My Top 9</Signuph3>
                <SignupP>Sign up to choose your top 9</SignupP>
                <SignupForm>
                    <SignupInput
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />

                    <SignupInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    {/* this should create a new account */}
                    <SignupButton 
                    type='submit'
                    onClick={e => {
                    e.preventDefault() 
                    this.props.signupUser(this.state)}}>
                    Sign up</SignupButton>       
                </SignupForm>
            </SignupDiv>
            <LinkDiv>
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