import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="logo">NewsPress</div>
      <nav>
        <ul>
          <li onClick={() => props.setPage('home')}>Home</li>
           <li onClick={() => props.setPage('selectSources')}>Sources</li>
          <li onClick={() => props.setPage('user')}>My News</li>
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

export default Header;