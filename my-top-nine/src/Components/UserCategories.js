import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCategory } from '../Actions/index';

class UserCategories extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.props.getUserCategory();
        this.setState({
            user: localStorage.getItem('username')
        })
    }

    render() {
        // console.log(this.state.user);
        console.log(this.props);
        return(
            <div>
                Users categories will go here

                {/* User Categories will go below vvvvvvvvvvv */}
                {/* <div>
                    {this.props.userCategories.map(category => (
                        <div key={category.cat_id} >
                            <img src={category.imgUrl} alt='Your Category' />
                            <h3>{category.category_name}</h3>
                            <p>{category.subcat_name}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        )
    }
}



const mapStateToProps = state => ({
    user: state.user,
    userCategories: state.userCategories
})

export default connect(mapStateToProps, { getUserCategory })(UserCategories);