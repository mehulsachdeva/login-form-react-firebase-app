import React, { Component } from 'react';
import './Signin.css';
import * as firebase from 'firebase';

class Signin extends Component {

  //*************Intializing****************
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
  }

  //****************** Signin function******************
  signIn = (event) => {
    event.preventDefault();

    let email = this.refs.email.value
    let password = this.refs.password.value

    //**************** Signin ******************
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(err) {
      // Handle errors
    });

    alert('Successfully Logined as ' + this.refs.email.value)

    //********* For Now Automatically SignOut **************
    firebase.auth().signOut()

    this.refs.email.value = ''
    this.refs.password.value = ''
  }

  render() {

    return (
      <div>
        <div className = 'container'>
          <form>

            <div className = 'container-header'>SIGN IN</div>

            <div className = 'sign-in-container'>
              <label>Email: </label><br />
              <input type = 'email' placeholder = 'Username' ref = 'email' />

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
      </div>
    );
  }
}

export default Signin;
