import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div className="logo">News Press</div>
      <nav>
        <ul>
          <li className = 'dropBtwn li' onClick={() => props.setPage('home')}>Home</li>
          <li className = 'dropBtwn li' onClick={() => props.setPage('selectSources')}>Sources</li>
          <li className = 'dropBtwn li' onClick={() => props.setPage('user')}>My News</li>
         
            
              <li className = 'dropDwn dropBtwn li' onClick={() => props.setPage('login')}>Log In</li>
              <li className='li' onClick={() => props.setPage('register')}>Register</li>
              <li className='li' onClick={props.logOut}>Log Out</li>
            

        </ul>
      </nav>
    </header>
  )
}

export default Header;