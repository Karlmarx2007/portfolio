import React from 'react';
import './AboutB.scss';

const AboutB = () => {
  return (
    <section id='about-b' className='bg-dark py-3'>
      <div className='container'>
        <h2 className='section-title'>Technical skills</h2>
        <div className='bottom-line'></div>
        <h4>JavaScript </h4>
        <div className='progress'>
          <div style={{width: '95%'}}>95%</div>
        </div>
        <h4>React</h4>
        <div className='progress'>
          <div style={{width: '93%'}}>93%</div>
        </div>
        <h4>Angular</h4>
        <div className='progress'>
          <div style={{width: '90%'}}>90%</div>
        </div>
        <h4>CSS / SASS</h4>
        <div className='progress'>
          <div style={{width: '92%'}}>92%</div>
        </div>
        <h4>BOOTSTRAP / STYLED COMPONENTS</h4>
        <div className = 'progress' >
          <div style = {{width: '92%'}}>92%</div>
        </div>
        <h4>NodeJS / EXPRESS / SENECA</h4>
        <div className='progress'>
          <div style={{width: '89%'}}>89%</div>
        </div>
      </div>
    </section>
  );
};

export default AboutB;
