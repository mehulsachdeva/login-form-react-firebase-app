import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Signup from "./Signup";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  signIn = (event) => {
    event.preventDefault();

    let rootRef = firebase.database().ref('users-details');

    //***********Currently Working On This****************

  }

  render() {

    return (
      <HashRouter>
        <div className = 'background-container'>
          <div className = 'container'>
            <form>

              <div className = 'container-header'>SIGN IN</div>

              <div className = 'sign-in-container'>
                <label>Username: </label><br />
                <input type = 'text' placeholder = 'Username' ref = 'username' />

                <label>Password: </label><br />
                <input type = 'password' placeholder = 'Password' ref = 'password' />
              </div>

              <button onClick = {this.signIn}>SIGN UP</button>
            </form>
          </div>
          <div>
            <div>{this.state.username}</div>
            <div>{this.state.password}</div>
          </div>
          <div>
            <NavLink to = '/Signup'>Not a member yet? Sign Up Here </NavLink>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
