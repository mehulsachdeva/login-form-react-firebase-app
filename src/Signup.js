import React, { Component } from 'react';
import './Signup.css';
import * as firebase from 'firebase';
import { Route } from "react-router-dom";

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  signUp = (event) => {
    event.preventDefault();

    let rootRef = firebase.database().ref('users-details');
    let user = {
      username: this.refs.username.value,
      password: this.refs.password.value,
      email: this.refs.email.value
    }
    if(rootRef.push(user)){
      alert('Registration Successful');
      <Route path="/App" component={App}/>
    } else {
      alert('Error in SignUp');
      this.refs.username.value = ''
      this.refs.password.value = ''
      this.refs.email.value = ''
    }
  }

  render() {

    return (
      <div className = 'background-container'>
        <div className = 'container'>
          <form>

            <div className = 'container-header'>SIGN UP</div>

            <div className = 'sign-up-container'>
              <label>Username: </label><br />
              <input type = 'text' placeholder = 'Username' ref = 'username' />

              <label>Password: </label><br />
              <input type = 'password' placeholder = 'Password' ref = 'password' />

              <label>Email: </label><br />
              <input type = 'email' placeholder = 'Email' ref = 'email' />
            </div>

            <button onClick = {this.signUp}>SIGN UP</button>
          </form>
        </div>
        <div>
          <div>{this.state.username}</div>
          <div>{this.state.password}</div>
        </div>
      </div>
    );
  }
}

export default Signup;
