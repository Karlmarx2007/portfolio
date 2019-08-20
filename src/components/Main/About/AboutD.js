import React from 'react';
import './AboutD.scss';

const AboutD = () => {
  return (
    <section id='about-d' className='py-4'>
      <div className='container'>
        <h2 className='section-title'>Testimonials</h2>
        <div className='bottom-line'></div>
        <p className='lead text-center'>A few endorsements from friends and collegues...</p>
        <div className='testimonials'>
          <div>
            <p>bla hahahahahahaha ahhahaaha ahahahaha ahahaha ahaha ah aha aah</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/person1.jpg')} alt='perso 1'/></li>
              <li>John Meharg, Winchester ON</li>
            </ul>
          </div>
          <div>
            <p>bla hahahahahahaha ahhahaaha ahahahaha ahahaha ahaha ah aha aah</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/person2.jpg')} alt='perso 1'/></li>
              <li>Michael Igbo, Ottawa ON</li>
            </ul>
          </div>
          <div>
            <p>bla hahahahahahaha ahhahaaha ahahahaha ahahaha ahaha ah aha aah</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/person3.jpg')} alt='perso 1'/></li>
              <li>Ronald Ekambi, Ottawa ON</li>
            </ul>
          </div>
          <div>
            <p>bla hahahahahahaha ahhahaaha ahahahaha ahahaha ahaha ah aha aah</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/person4.jpg')} alt='perso 1'/></li>
              <li>Nafi Toure, Ottawa ON</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutD;
