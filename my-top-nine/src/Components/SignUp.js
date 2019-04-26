import React, { Component } from 'react';
import Login from './Login';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    // state = {
    //     username: '',
    //     password: '',
    // }

    render() {
        return(
            <div>
                <h3>My Top 9</h3>
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

                    <button type='submit'>Sign up</button>
                    <Route exact path='/login' component={Login} />
                    <Link to='/login'>Already have an account? Login</Link>           
                </form>
            </div>
        )
    }
}

export default SignUp;