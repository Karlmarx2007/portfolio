import React from 'react';
import './HeaderContent.scss';
import TypeEffect from './TypeEffect';
import {Link} from 'react-router-dom';

const HeaderContent = () => {

  return (
    <div className='header-content'>
      <h1>I am Karl the &nbsp;
        <TypeEffect />
      </h1>
      <p className='lead'>I specialize in Full Stack Software Development</p>
      <Link className='btn-light' to="/work">View My Work</Link>
    </div>
  );
}

export default HeaderContent;
