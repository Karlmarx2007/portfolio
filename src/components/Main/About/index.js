import React from 'react';
import MainNavBar from '../../Header/MainNavBar';
import Footer from './../../Footer/Footer.js';
import AboutA from './AboutA';
import AboutB from './AboutB';
import AboutC from './AboutC';
import AboutD from './AboutD';
import './index.scss';

const About = () => {
  return (
    <div>
      <header id='header-iner'>
        <div className='container'>
          <MainNavBar about='current'/>
        </div>
      </header>
      <AboutA />
      <AboutB />
      <AboutC />
      <AboutD />
      <Footer />
    </div>
  );
}
export default About;
