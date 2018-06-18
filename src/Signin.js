import React, { Component } from 'react';
import './Signin.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Signup from './Signup';
import * as firebase from 'firebase';

class Signin extends Component {

  //*************Intializing****************
  constructor(props){
    super(props);
    this.state = {
      auth: ''
    }
  }

  //****************** Signin function******************
  signIn = (event) => {
    event.preventDefault();

    let email = this.refs.email.value
    let password = this.refs.password.value

    //**************** Signin ******************
    firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
      // Handle errors
      if(err){
        alert('Invalid credentials');
        this.setState({
          auth: null,
        },() => {
          console.log(this.state.auth)
        })
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user)
        alert('Successfully Logined as ' + this.state.auth)
        this.setState({
          auth: user.email,
        })
      }

    });

    //********** Reset input value to empty *************
    this.refs.email.value = ''
    this.refs.password.value = ''
  }

  render() {

    const SignUp = () => <Signup />

    return (
      <div className = 'background-container'>
        <div className = 'container'>
          <form>

            <div className = 'container-header'>SIGN IN</div>

            <div className = 'sign-in-container'>
              <label>Email: </label><br />
              <input type = 'email' placeholder = 'Email' ref = 'email' />

              <label>Password: </label><br />
              <input type = 'password' placeholder = 'Password' ref = 'password' />
            </div>

            <button onClick = {this.signIn}>SIGN IN</button>
          </form>
        </div>
        <div>
          <Router>
            <div className = 'link-to-signup-form'>
              <Link to = "/signup" style = {{textDecoration: 'none',color: '#2C3E50'}} className = 'link'>Not a member yet? Sign Up Now</Link>
              <Switch>
                <Route path = "/signup" component = {SignUp} />
              </Switch>
            </div>
          </Router>
        </div>

      </div>
    );
  }
}

export default Signin;
