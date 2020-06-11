import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutC.scss';

const AboutC = () => {
  return (
    <section id='about-c' className='py-4 bg-light'>
      <div className='container'>
        <div className='about-logos'>
          <FontAwesomeIcon icon={['fab', 'js']} className='fab' size='3x'/>
          <FontAwesomeIcon icon={['fab', 'react']} className='fab' size='3x' />
          <FontAwesomeIcon icon={['fab', 'angular']} className='fab' size='3x'/ >
          <FontAwesomeIcon icon={['fab', 'html5']} className='fab' size='3x'/>
          <FontAwesomeIcon icon={['fab', 'css3']} className='fab' size='3x'/>
          <FontAwesomeIcon icon={['fab', 'sass']} className='fab' size='3x'/>
          <FontAwesomeIcon icon={['fab', 'node']} className='fab' size='3x'/>
        </div>
      </div>
    </section>
  );
}

export default AboutC;
