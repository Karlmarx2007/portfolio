import React from 'react';
import HeaderIner from '../../Header/HeaderIner';
import Footer from './../../Footer/Footer.js';
import AboutA from './AboutA';
import AboutB from './AboutB';
import AboutC from './AboutC';
import AboutD from './AboutD';

const About = () => {
  return (
    <div>
      {/*current would be used to style Contact when selected on MainNavBar*/}
      <HeaderIner about='current'/>
      <AboutA />
      <AboutB />
      <AboutC />
      <AboutD />
      <Footer />
    </div>
  );
}
export default About;
