import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';

class UserAccountPage extends Component {

    render() {
        return(
            <div>
                <Header />
                <h3>My Account page</h3>
                
                {/* User Categories will go below vvvvvvvvvvv */}
                {/* <div>
                    {this.props.userCategories.map(category => (
                        <HomePage {...category} key={category.name} />
                    ))}
                </div> */}

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userCategories: state.userCategories,
    users: state.users
})


export default connect(mapStateToProps, {})(UserAccountPage);