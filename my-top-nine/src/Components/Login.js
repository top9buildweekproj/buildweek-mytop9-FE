import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
            <div>
                <h3>Please Log in!</h3>
                <form>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        // value={this.state.username}
                        // onChange={this.handleChange}
                    />

                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                        // value={this.state.password}
                        // onChange={this.handleChange}
                    />

                    <button type='submit'>Login</button>
                    <Link to='/'>Need to Sign up?</Link>
                </form>
            </div>
        )
    }
    
}

export default Login;