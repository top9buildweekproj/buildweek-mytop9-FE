import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import { Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
      <div className="App">
      <Switch>
        <Route path='/login' 
        render={() => (this.props.isLoggedIn ? 
        (<Redirect to='/' />) 
        : ( <Login />))} /> 
        <Route path='/signup' 
        render={() => (this.props.isLoggedIn ? 
        (<Redirect to='/' />) 
        : ( <SignUp />))} />
        {/* This is the component that holds login/signup */}
        <Route exact path='/' 
        render={() => (!this.props.isLoggedIn ? 
        (<Redirect to='/login' />) 
        : ( <Home /> ))} />
        <HomePage/>
      </Switch>
        
      </div>
      </Container>
    );
  }


const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {})(App);
