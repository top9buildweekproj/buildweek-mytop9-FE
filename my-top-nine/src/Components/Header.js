import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { 
  HeaderH1, 
  HeaderDiv, 
  HeaderSpans, 
  LogoutButton, 
  UserButtons,
  MyAccount
} from './Styles';
import Moment from './Moment/Moment';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { logoutUser } from '../Actions/index';
import { connect } from 'react-redux';





class Header extends Component{
  state = {
    user: {
        username: '',
        password: '',
    }
}

  MyAccountClick = () => {
    this.props.history.push('my-account');
  }

  homePageClick = () => {
    this.props.history.push('/');
  }

  logoutUser = () => {
    this.props.logoutUser(this.state.user)
  }

  render() {
    return (
      <div>
        <HeaderDiv>
          <HeaderSpans date> <Moment /></HeaderSpans>
          <HeaderH1 onClick={this.homePageClick}>My Top 9</HeaderH1>
            <NavBar/>
          
          <HeaderSpans temp>69°</HeaderSpans>
          <UserButtons>
            <MyAccount onClick={this.MyAccountClick} >My Account</MyAccount>
            <LogoutButton
            onClick={e => { 
            e.preventDefault()
            this.logoutUser(this.state)}}
            >Log Out</LogoutButton>
           </UserButtons>     
        </HeaderDiv>
      </div>
    )
  }
    
}


// export default Header
export default withRouter(connect(null, {logoutUser})(Header));