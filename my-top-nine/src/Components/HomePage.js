
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCategory} from '../Actions/index';
import Carousel from './Carousel/Carousel';
import Header from './Header';
import NavBar from './NavBar'; 
import { Container } from 'reactstrap';

const Category = []


class HomePage extends Component {
    componentDidMount() {
        this.props.getCategory();

    }

    render() {
    return (
        <Container>
            <Header/>
          
            <Carousel/>
             {this.props.fetchingCategory === true ? <h1>Loading Category...</h1> : null }
              {this.props.error && this.props.error.length > 0 ? <h1>{this.props.error}</h1> : null}
          {/* this.props.categories.map((category, id) => <Category category={category} key={id}/>) */}
        </Container>
      

       
    );
}

}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        error: state.error,
        fetchingCategory: state.fetchingCategory
    }
}

export default connect(mapStateToProps, {getCategory})(HomePage);