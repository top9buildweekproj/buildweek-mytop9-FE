import React, {Component} from 'react';
import {connect } from 'react-redux';
import {getUsers, getSubCategory} from '../Actions/index';



class SubCategory extends Component {
    componentDidMount() { 
        // const userId = JSON.parse(localStorage.getItem("userId"))
        const username = (localStorage.getItem("username"))

        // console.log(userId)
        this.props.getUsers(username)
        this.props.getSubCategory(2);
       
    }
    render() {
        console.log(this.props)
        const {subCategories} = this.props
      
    return (
        <div>
        {subCategories && subCategories.map((category,userId) => <p key={userId}>{category.subcat_name}</p> )}
        
        
        </div>

    );
    

    }

}
 
const mapStateToProps = state => {
  
    return {
        subCategories: state.subCategories,
        userId: state.userId
   
    }

}
export default connect(mapStateToProps, {getUsers, getSubCategory})(SubCategory);