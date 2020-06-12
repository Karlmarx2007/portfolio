import React from 'react';
import './AboutA.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutA = () => {
  return (
    <section id='about-a' className='text-center py-3'>
      <div className='container'>
        <h2 className='section-title'>About Me</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Let me tell you a bit about me...</p>
        <div className='about-info'>
          <img src={require('./../../../dist/img/karl5.png')} alt='About KM' className='bio-image' />
          <div className='bio bg-light'>
            <h4>Your project is in safe hands</h4>
            <p>Karl Matuke is a twenty something Software Developer based in Ottawa, Ontario.</p>
            <p>Karl is very passionate about developing web and mobile aplications</p>
            <br />
            <p>  He believes taking one step at a time would complete any undertaking.</p>
            <p>  Karl is always open to learning new technologies and is also a great team player.</p>
            <br />
            <p>On his spare time, If he's not reading a book by Leo Tolstoy, he's probably playing soccer or hiking
            somewhere in the woods</p>
          </div>
          {/* <div className='award-1'>
            <FontAwesomeIcon icon="award" size='3x' className='fas'/>
            <h3>Award 1</h3>
            <p>HAHAHA BLABLABLA HAHAHA AHAHHAH HAHAH AH A</p>
          </div>
          <div className='award-2'>
            <FontAwesomeIcon icon="award" size='3x' className='fas'/>
            <h3>Award 1</h3>
            <p>HAHAHA BLABLABLA HAHAHA AHAHHAH HAHAH AH A</p>
          </div>
          <div className='award-3'>
            <FontAwesomeIcon icon="award" size='3x' className='fas'/>
            <h3>Award 1</h3>
            <p>HAHAHA BLABLABLA HAHAHA AHAHHAH HAHAH AH A</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default AboutA;
