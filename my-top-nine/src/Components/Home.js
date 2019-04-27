import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        return(
            <div>
                Home Page
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {})(Home);