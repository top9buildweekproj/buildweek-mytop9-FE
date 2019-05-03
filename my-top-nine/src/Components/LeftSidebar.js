import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logoutUser} from '../Actions/index';
import { withRouter } from 'react-router';
import { 
    LeftSide, 
    LogoutButton, 
    UserButtons,
    MyAccount,
    LeftSideText,
    Icons,
    IconImg,
    CopyrightPLeft
} from './Styles';

class LeftSidebar extends Component {
    state = {
      user: {
          username: '',
          password: '',
      }
  }

    MyAccountClick = () => {
        this.props.history.push('/my-account');
      }
    
      homePageClick = () => {
        this.props.history.push('/');
      }
    
      logoutUser = () => {
        this.props.logoutUser(this.state.user)
        this.props.history.push('/');
      }


    render() {
        return(
            <LeftSide>
                    <LeftSideText>Choose your top 9 categories so you can share your interests with all of your friends!</LeftSideText>
                    <UserButtons>
                        <MyAccount onClick={this.MyAccountClick} >My Account</MyAccount>
                        <LogoutButton
                        onClick={e => { 
                        e.preventDefault()
                        this.logoutUser(this.state)}}
                        >Log Out</LogoutButton>
                    </UserButtons>
                    <Icons>
                        <IconImg src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-facebook-2.png' />
                        <IconImg src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-twitter-2.png'/>
                        <IconImg src='https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-instagram-12.png'/>
                        <IconImg src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-google-plus-2.png'/>
                    </Icons>
                    <CopyrightPLeft>
                        ©2019 My Top 9, LLC All rights reserved.
                    </CopyrightPLeft>
                </LeftSide>
        )
    }
}

export default withRouter(connect(null, {logoutUser})(LeftSidebar));