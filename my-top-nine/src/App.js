import React from 'react';
import './App.css';
import LoginView from './Components/LoginView';

function App() {
  return (
    <div className="App">
      <LoginView /> {/* This is the component that holds login/signup */}
    </div>
  );
}

export default App;
