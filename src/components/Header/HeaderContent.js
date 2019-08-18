import React from 'react';
import './HeaderContent.scss';
import TypeEffect from './TypeEffect';

const HeaderContent = () => {

  return (
    <div className='header-content'>
      <h1>I am Karl the &nbsp;
        <TypeEffect />
      </h1>
      <p className='lead'>I specialize in Front End Software Development</p>
      <a href='work.html' className='btn-light'>View My Work</a>
    </div>
  );
}

export default HeaderContent;
