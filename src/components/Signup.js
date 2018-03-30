import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import fetch from 'node-fetch';

import {
    getFromStorage,
    setInStorage,
  } from '../utils/storage';


class Signup extends Component {

  constructor() {
    super();
    this.state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signUpPhone: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpPasswordConfirm:''
    };

    this.onTextboxChangeSignUpPhone = this.onTextboxChangeSignUpPhone.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpPasswordConfirm = this.onTextboxChangeSignUpPasswordConfirm.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onTextboxChangeSignUpPhone(event) {
    this.setState({
      signUpPhone: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }
  
  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpPasswordConfirm(event) {
      this.setState({
        signUpPasswordConfirm: event.target.value,
      });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

//   onSubmit = (e) => {
//     e.preventDefault();
//   }

  onSignUp() {
    const {
      signUpPhone,
      signUpEmail,
      signUpPassword,
      signUpPasswordConfirm
    } = this.state;
    this.setState({
      isLoading: true,
    });
    
    // Post request to backend
    fetch('/api/account/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: signUpPhone,
        email: signUpEmail,
        password: signUpPassword, 
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpPhone: ''
          });
          this.props.history.push("/") // if success, forward to index page
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
    });
  }

  render() {
    const { signUpPhone, signUpEmail, signUpPassword, signUpPasswordConfirm } = this.state;
    return (
    <main class="page-main">
		<div class="block">
			<h2 class="text-center h-lg h-decor">會員註冊</h2>
			<div class="container">
			<div class="main-login main-center">
                {/* <form class="" method="post" action="#"> */}
                    <div class="form-group">
                        <label for="username" class="cols-sm-2 control-label">行動電話</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                {/* <input type="text" class="form-control" name="username" id="username"  placeholder="Enter your Username"/> */}
                                <input type="tel" class="form-control" name="username" id="username" placeholder="手機號碼" value={signUpPhone} onChange={this.onTextboxChangeSignUpPhone}/><br />

                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="password" class="cols-sm-2 control-label">密碼</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                {/* <input type="password" class="form-control" name="password" id="password"  placeholder="輸入你的密碼"/> */}
                                <input type="password" class="form-control" placeholder="輸入你的密碼" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword}/><br />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="confirm" class="cols-sm-2 control-label">再次確認密碼</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                {/* <input type="password" class="form-control" name="confirm" id="confirm"  placeholder="確認你的密碼"/> */}
                                <input type="password" class="form-control" name="confirm" id="confirm" placeholder="確認你的密碼" value={signUpPasswordConfirm} onChange={this.onTextboxChangeSignUpPasswordConfirm}/><br />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="cols-sm-2 control-label">電子信箱</label>
                        <div class="cols-sm-10">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                {/* <input type="text" class="form-control" name="email" id="email"  placeholder="輸入email"/> */}
                                <input type="email" class="form-control" name="email" id="email"  placeholder="輸入email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail}/><br />
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        {/* <a href="rigister_verification_.html" target="_blank" type="button" id="button" class="btn btn-primary btn-lg btn-block login-button">註冊</a> */}
                        <button class="btn btn-primary btn-lg btn-block login-button" onClick={this.onSignUp}>註冊</button>
                    </div>
                {/* </form> */}
            </div>
			</div>
		</div>
    </main>
    );
  }
}

export default Signup;