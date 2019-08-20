import React from 'react';
import './AboutB.scss';

const AboutB = () => {
  return (
    <section id='about-b' className='bg-dark py-3'>
      <div className='container'>
        <h2 className='section-title'>Technical skills</h2>
        <div className='bottom-line'></div>
        <h4>JavaScript: </h4>
        <div className='progress'>
          <div style={{width: '90%'}}>90%</div>
        </div>
        <h4>ReactJS: </h4>
        <div className='progress'>
          <div style={{width: '80%'}}>80%</div>
        </div>
        <h4>HTML: </h4>
        <div className='progress'>
          <div style={{width: '98%'}}>98%</div>
        </div>
        <h4>CSS/SASS: </h4>
        <div className='progress'>
          <div style={{width: '75%'}}>75%</div>
        </div>
        <h4>JAVA: </h4>
        <div className='progress'>
          <div style={{width: '70%'}}>70%</div>
        </div>
        <h4>NodeJS: </h4>
        <div className='progress'>
          <div style={{width: '70%'}}>70%</div>
        </div>
      </div>
    </section>
  );
};

export default AboutB;
