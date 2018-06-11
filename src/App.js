import React, { Component } from 'react';
import './App.css';
import Signin from './Signin.js';
import Signup from './Signup.js';
import * as firebase from 'firebase';

class App extends Component {

  render() {
    return (
      <div className = 'background-container'>
        <div className = 'signin-container'>
          <Signin />
        </div>
        <div className = 'signup-container'>
          <Signup />
        </div>
      </div>
    );
  }
}

export default App;
