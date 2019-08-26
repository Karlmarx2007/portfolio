import React from 'react';
import MainNavBar from './MainNavBar';
import './HeaderIner.scss';

const HeaderIner = (props) => {
  return (
    <header id='header-iner'>
      <div className='container'>
        <MainNavBar about={props.about} work={props.work} contact={props.contact}/>
      </div>
    </header>
  );
}

export default HeaderIner;
