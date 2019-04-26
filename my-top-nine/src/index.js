import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import { Provider } from 'react-redux';

// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <App />
    </Router>        
, document.getElementById('root'));
