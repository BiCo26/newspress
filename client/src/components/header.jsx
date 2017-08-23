import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="logo">NEWSPress</div>
      <nav>
        <ul>
          <li onClick={() => props.setPage('home')}>Home</li>
          <li onClick={() => props.setPage('user')}>User Dashboard</li>
          <li onClick={() => props.setPage('login')}>Log In</li>
            <ul className = 'submenu'>
              <li onClick={() => props.setPage('register')}>Register</li>
              <li onClick={props.logOut}>Log Out</li>
            </ul>
        </ul>
      </nav>
    </header>
  )
}

import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <div className="logo">NEWSPress</div>
      <nav>
        <ul>
          <nav>
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/USER'>My News</Link></li>
          <li><Link to='/Login'>Login</Link></li>
            <ul className = 'submenu'>
              <li><Link to='/Register'>Register</li>
              <li><Link to= 'LOGOUT'>Log Out</li>
            </ul>
        </ul>
      </nav>
      )
    }


  

export default Header;

export default Header;
