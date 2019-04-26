import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
    // }
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

                    <SignupButton type='submit'>Login</SignupButton>
                    
                </SignupForm>
            </SignupDiv>
            <LinkDiv>
                <Link to='/' 
                style={{ textDecoration: 'none', 
                color: '#444444' }}>
                Need to Sign up?
                </Link> {/* takes you to SignUp page */}
            </LinkDiv>
            </>
        )
    }
    
}

export default Login;