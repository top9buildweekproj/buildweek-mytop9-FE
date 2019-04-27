import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import LoginView from './Components/LoginView';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/login' 
        render={() => (this.props.isLoggedIn ? 
        (<Redirect to='/' />) 
        : ( <LoginView />))} /> 
        {/* This is the component that holds login/signup */}
        <Route exact path='/' 
        render={() => (!this.props.isLoggedIn ? 
        (<Redirect to='/login' />) 
        : ( <Home /> ))} />
      </div>
    );
  }
}
  

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {})(App);
