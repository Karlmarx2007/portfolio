import React from 'react';
import './MainNavBar.scss';
import {Link} from 'react-router-dom';

const MainNavBar = (props) => {
  return (
      <nav id='main-nav'>
        <Link id='logo' to="/">k m</Link>
        <ul>
          <li><Link className={props.home} to="/">Home</Link></li>
          <li><Link className={props.about} to="/about">About</Link></li>
          <li><Link className={props.work} to="/work">Work</Link></li>
          <li><Link className={props.contact} to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
}
export default MainNavBar;
