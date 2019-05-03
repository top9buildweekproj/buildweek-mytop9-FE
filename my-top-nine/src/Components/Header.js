import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from "react-router";

import { 
  HeaderH1, 
  HeaderDiv, 
  HeaderSpans,
} from './Styles';
import Moment from './Moment/Moment';
import NavBar from './NavBar';
import { logoutUser } from '../Actions/index';
import { connect } from 'react-redux';





class Header extends Component{
  state = {
    user: {
        username: '',
        password: '',
    }
}

homePageClick = () => {
  this.props.history.push('/');
}
  

  render() {
    return (
      <div>
        <HeaderDiv>
          <HeaderSpans date> <Moment /></HeaderSpans>
          <HeaderH1 onClick={this.homePageClick}>My Top 9</HeaderH1> 
          <HeaderSpans temp>69°</HeaderSpans>   
        </HeaderDiv>
      </div>
    )
  }
    
}


// export default Header
export default withRouter(connect(null, {logoutUser})(Header));