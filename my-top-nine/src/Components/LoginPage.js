import React, { Component } from 'react';
import SignUp from './SignUp';

class LoginPage extends Component {
    
    render() {
        return(
            <div>
                <SignUp // This contains the new account form
                    handleChange={this.handleChange}
                />
            </div>
        )
    }

}

export default LoginPage;