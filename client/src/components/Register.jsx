import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUserChange(e) {
    this.setState({
      username: e.target.value
    });
    console.log(this.state.username);
  }
 
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  


  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state.username, this.state.password)}>
          <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleUserChange}  />
          <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange}  />
          <input type="submit" value='Register!'/>
        </form>
      </div>
    )
  }
}

export default Register;