import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import UserAccountPage from './Components/UserAccountPage';
import { Container } from './Components/Styles';
// import { Container} from 'reactstrap';

class App extends Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    if (!sessionStorage.getItem('isLoggedIn')) {
      this.setState({ 
        isLoggedIn: false
       })
    } else {
      this.setState({ 
        isLoggedIn: true
       })
    }
  }

  render() {
    return (
      <Container>
      <div className="App">

      <Switch>

        <Route path='/login' render={() => 
        (this.state.isLoggedIn === true ? (<Redirect to='/' />) : ( <Login />))} /> 

        <Route path='/signup' render={() => 
        (this.state.isLoggedIn === true ? (<Redirect to='/' />) : ( <SignUp />))} />

        {/* This is the component that holds login/signup */}

        <Route exact path='/' render={() => 
        (!this.state.isLoggedIn ? (<Redirect to='/login' />) : ( <HomePage/> ))} />

        <Route exact path='/' component={HomePage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/my-account' component={UserAccountPage} />
      </Switch>
        
      </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps, {})(App);
