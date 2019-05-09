import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import { RightSide, UserAccountPageDiv } from './Styles';
import SubCategory from './SubCategory';

class UserAccountPage extends Component {

    render() {
        return(
            <div>
                <Header />
                <UserAccountPageDiv>
                    <LeftSidebar />
                    <RightSide>          
                        <h3>My Account page</h3>
                        <SubCategory />
                        <Footer />
                    </RightSide>
                </UserAccountPageDiv>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userCategories: state.userCategories,
    users: state.users
})


export default connect(mapStateToProps, {})(UserAccountPage);