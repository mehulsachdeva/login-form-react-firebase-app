import React, { Component } from 'react';
import './Signup.css';
import * as firebase from 'firebase';

class Signup extends Component {

  //***************Intializing******************
  constructor(props){
    super(props);
    this.state = {

    }
  }

  //************** SignUp ********************
  signUp = (event) => {
    event.preventDefault();

    let password = this.refs.password.value
    let email = this.refs.email.value

    //************ Registration with email and password **********************
    firebase.auth().createUserWithEmailAndPassword(this.refs.email.value, this.refs.password.value).catch(function (err) {
      // Handle errors
    });

    alert('Registered Successfully.')

    //************* Reset the form*******************
    this.refs.email.value = ''
    this.refs.password.value = ''
  }

  render() {

    return (
      <div className = 'background-container'>
        <div className = 'container'>
          <form>

            <div className = 'container-header'>SIGN UP</div>

            <div className = 'sign-up-container'>

              <label>Email: </label><br />
              <input type = 'email' placeholder = 'Email' ref = 'email' />

              <label>Password: </label><br />
              <input type = 'password' placeholder = 'Password' ref = 'password' />

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
