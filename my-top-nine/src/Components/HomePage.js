
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../Actions/index';
import Carousel from './Carousel/Carousel';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'reactstrap';
import Category from './Category';

class HomePage extends Component {
    componentDidMount() {
       // this.props.getCategory();
    }

    render() {
    return (
        <Container>
            <Header/>
          
            <Carousel/>
             {this.props.fetchingCategory === true ? <h1>Loading Category...</h1> : null }
              {this.props.error && this.props.error.length > 0 ? <h1>{this.props.error}</h1> : null}
          {/* this.props.categories.map((category, id) => <Category category={category} key={id}/>) */}
          <Category/>
            <Footer />
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
export default connect(mapStateToProps, { getCategory })(HomePage);