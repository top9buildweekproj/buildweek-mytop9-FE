import React, {Component} from 'react';
import {connect } from 'react-redux';
import {getCategory} from '../Actions/index';


class Category extends Component {
    componentDidMount() {
        this.props.getCategory();
    }

    render() {
        const {categories} = this.props
        
    return (
        <div>
        {categories && categories.map((category, id) => <h1 key={id}>{category.category_name}</h1> )}
        
        {///categories && categories.map((category, id) => <p key={id}>{category.imageUrl}</p> )
    }
        
        </div>

    );
    

    }

}
 
const mapStateToProps = state => {
    console.log(state)
    return {
        categories: state.categories
   
    }

}
export default connect(mapStateToProps, {getCategory})(Category);







