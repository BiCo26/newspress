import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import GetNews from './components/GetNews';
import SourcesInput from './components/SourcesInput';
import SelectSources from './components/SelectSources';
import Home from './components/Home';

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'

class App extends Component {
   constructor() {
    super();
    this.state = {
      auth: false,
      user: null,
      currentPage: 'home',
    }
    this.setPage = this.setPage.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
   }

  // PAGINATION

  setPage(page) {
    console.log('click');
    this.setState({
      currentPage: page,
    })
  }

  decideWhichPage() {
    switch(this.state.currentPage) {
      case 'home':
        return <Home/>;
        break;
      case 'login':
        return <Login handleLoginSubmit={this.handleLoginSubmit} />;
        break;
      case 'register':
        return <Register handleRegisterSubmit={this.handleRegisterSubmit} />;
      default:
        break;
    }
  }

  // AUTH
  handleLoginSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/login', {
      username,
      password,
    }).then(res => {
      this.setState({
        auth: res.data.auth,
        user: res.data.user,
        currentPage: 'home',
      });
      console.log(this.state.user)
    }).catch(err => console.log(err));
  }

  handleRegisterSubmit(e, username, password) {
    e.preventDefault();
    axios.post('/auth/register', {
      username,
      password,
    }).then(res => {
      this.setState({  
        auth: res.data.auth,
        user: res.data.user,
        currentPage: 'home',
      });
    }).catch(err => console.log(err));
  }

  logOut() {
  axios.get('/auth/logout')
    .then(res => {
      console.log(res);
      this.setState({
        auth: false,
      });
    }).catch(err => console.log(err));
} 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
         <Home/>
        {/* <SelectSources/> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

         {/*<SourcesInput/>*/}
       {/*<GetNews />*/}
      </div>
    );
  }
}

export default App;
