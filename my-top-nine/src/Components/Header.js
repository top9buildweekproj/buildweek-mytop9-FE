import React, { Component } from 'react';
import { HeaderH1, HeaderDiv, HeaderSpans } from './Styles';
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

  logoutUser = () => {
    this.props.logoutUser(this.state.user)
  }

  render() {
    return (
      <div>
        <HeaderDiv>
          <HeaderSpans date> <Moment /></HeaderSpans>
          <HeaderH1>My Top 9</HeaderH1>
          
          <HeaderSpans temp>69°</HeaderSpans>
          <button
          onClick={e => { 
          e.preventDefault()
          this.logoutUser(this.state)}}
          >Log Out</button>
        </HeaderDiv>
        <NavBar/>
      </div>
    )
  }
    
}



// export default Header
export default connect(null, {logoutUser})(Header);