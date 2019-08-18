import React from 'react';
import './MainNavBar.scss';

const MainNavBar = () => {
  return (
      <nav id='main-nav'>
        <a id='logo' href='/'>k m</a>
        <ul>
          <li><a href='home.html' className='current'>Home</a></li>
          <li><a href='about.html'>About</a></li>
          <li><a href='work.html'>Work</a></li>
          <li><a href='contact.html'>Contact</a></li>
        </ul>
      </nav>
  );
}
export default MainNavBar;
