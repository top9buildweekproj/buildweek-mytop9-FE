import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserCategories extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.setState({
            user: localStorage.getItem('username')
        })
    }

    render() {
        console.log(this.state.user);
        console.log(this.props);
        return(
            <div>
                Users categories will go here
                {/* <h3>{this.props.name}</h3> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(UserCategories);