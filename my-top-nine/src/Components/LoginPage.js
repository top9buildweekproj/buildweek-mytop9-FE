import React, { Component } from 'react';
import SignUp from './SignUp';

class LoginPage extends Component {
    // state = {
    //     user: {
    //         username: '',
    //         password: '',
    //     }
    // }

    // handleChange = e => {
    //     this.setState({
    //         user: {
    //             ...this.state.user,
    //             [e.target.name]: e.target.value
    //         }
    //     })
    // }

    render() {
        return(
            <div>
                <SignUp
                    // handleChange={this.handleChange}
                />      
            </div>
        )
    }

}

export default LoginPage;