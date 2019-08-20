import React from 'react';
import MainNavBar from './MainNavBar';
import HeaderContent from './HeaderContent';
import './Header.scss';

//App Header Section
const Header = () => {
  return (
    <header id='header-home'>
      <div className='container'>
          <MainNavBar home='current'/>
          <HeaderContent />
      </div>
    </header>
  );
}

export default Header;
