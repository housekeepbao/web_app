import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import fetch from 'node-fetch';

import {
  getFromStorage,
  setInStorage,
} from './utils/storage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInPhone: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpPhone: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeSignInPhone = this.onTextboxChangeSignInPhone.bind(this);
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    
    if (obj && obj.token) {
      const { token } = obj;
       fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }

    // axios.get('/api/book')
    //   .then(res => {
    //     this.setState({ books: res.data });
    //     console.log(this.state.books);
    //   });
  }

  onTextboxChangeSignInPhone(event) {
    this.setState({
      signInPhone: event.target.value,
    });
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onSignIn() {
    // Grab state
    const {
      signInPhone,
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });
    
    // Post request to backend
    fetch('/api/account/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: signInPhone,
        email: signInEmail,
        password: signInPassword, 
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('the_main_app', {token: json.token});
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPhone: '',
            signInEmail: '',
            signInPassword: '',
            token: json.token
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          })
        }
    });    
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    
    if (obj && obj.token) {
      const { token } = obj;
       fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInPhone,
      signInEmail,
      signInPassword,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <div>
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ):(null)
            }
            <div>
              <Link to="/signin">登入</Link>
            </div>

            <div>
              <Link to="/signup">註冊</Link>
            </div>

            <br/>
            <br/>
            <p>Sign In</p>
            <input type="tel" placeholder="Phone Number" value={signInPhone} onChange={this.onTextboxChangeSignInPhone}/><br />
            <input type="password" placeholder="Password" value={signInPassword} onChange={this.onTextboxChangeSignInPassword}/><br />
            <button onClick={this.onSignIn}>Sign In</button>
          </div>
          <br />
          <br />
          <div>
            {/* {
              (signUpError) ? (
                <p>{signUpError}</p>
              ):(null)
            } */}
            {/* <p>Sign Up</p>
            <input type="text" placeholder="First Name" value={signUpFirstName} onChange={this.onTextboxChangeSignUpFirstName}/><br />
            <input type="text" placeholder="Last Name" value={signUpLastName} onChange={this.onTextboxChangeSignUpLastName}/><br />
            <input type="text" placeholder="Phone Number" value={signUpPhone} onChange={this.onTextboxChangeSignUpPhone}/><br />
            <input type="email" placeholder="Email" value={signUpEmail} onChange={this.onTextboxChangeSignUpEmail}/><br />
            <input type="password" placeholder="Password" value={signUpPassword} onChange={this.onTextboxChangeSignUpPassword}/><br />
            <button onClick={this.onSignUp}>Sign Up</button> */}
          </div>
        </div>
      );
    }

    return (
      <div>
        <p>Hi</p>
        <p>Account {token}</p>
        <button onClick={this.logout}>Logout</button>
        <br />
        <br />
        <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              BOOK CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {this.state.books.map(book =>
                  <tr>
                    <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default App;