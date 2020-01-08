import React, { Component } from 'react';
import './LoginForm.css';
import axios from 'axios';

class LoginForm extends Component {

  state = {
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  }

  performSignIn = (username, password) => {
    var data = {
      username: username,
      password: password
    }
    axios.post('/login', data).then(results => {
      this.setState({
        username: results.data.username,
        password: results.data.password
      })
    });
  }

  performSignUp = (username, password, email) => {
    var data = {
      username: username,
      password: password,
      email: email
    }
    axios.post('/signUp', data).then(results => {
      this.setState({
        username: results.data.username,
        password: results.data.password,
        email: results.data.email
      })
    });
  }



  signInBtnClicked = (e) => {
    e.preventDefault();
    // console.log('Sign In');
    var usernameInput = document.getElementById('username').value;
    var passwordInput = document.getElementById('password').value;
    
    this.performSignIn(usernameInput, passwordInput);

    // this.setState({
    //   username: usernameInput,
    //   password: passwordInput
    // })
  }

  signUpBtnClicked = (e) => {
    e.preventDefault();
    // console.log('Sign Up');
    var emailInput = document.querySelector('#create-email').value;
    var usernameInput = document.querySelector('#create-username').value;
    var passwordInput = document.querySelector('#create-password').value;


    this.performSignUp(usernameInput, passwordInput, emailInput);
    this.setState({
      email: emailInput,
      username: usernameInput,
      password: passwordInput
    })
  }

  signUpOverlayButtonPressed = () => {
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  };

  signInOverlayButtonPressed = () => {
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  };

  render() {
    return (
      <div className="container" id="container">
	      <div className="form-container sign-up-container">
		      <form>
            <h1 className="title">Create Account</h1>
            <div className="social-container">
              <a href="www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="www.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input className="input" type="email" placeholder="Email" id="create-email"/>
            <input className="input" type="text" placeholder="Username" id="create-username"/>
            <input className="input" type="password" placeholder="Password" id="create-password" />
            <button className="button size" style={{marginTop: '20px'}} onClick={this.signUpBtnClicked} id="signUpBTN">Sign Up</button>
          </form>
	      </div>
        <div className="form-container sign-in-container">
          <form>
            <h1 className="title">Sign in</h1>
            <small className="alert-message-error" id="error-message" style={{display: 'none'}}></small>

            <div className="social-container">
            <a href="www.facebook.com" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="www.google.com" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="www.linkedin.com" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input className="input" type="Username" placeholder="Username" id="username"/>
            <input className="input" type="password" placeholder="Password" id="password"/>
            <span>Forgot your password?</span>
            <button className="button size" onClick={this.signInBtnClicked} id="signInBTN">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="overlay-title">Welcome Back!</h1>
              <p>Already registered? Sign in to stay connected!</p>
              <button className="ghost" onClick={this.signInOverlayButtonPressed} id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="overlay-title">Hello, Friend!</h1>
              <p>Don't have an account? Sign up and start planning your next event!</p>
              <button className="ghost" id="signUp" onClick={this.signUpOverlayButtonPressed}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;