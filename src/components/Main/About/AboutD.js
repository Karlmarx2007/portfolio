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
            <p> Karl is a joy to work with. A true team player with an excellent attitude.</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/joanne-edited.jpg')} alt='Joanne'/></li>
              <li>Joanne Pendon, COO, QC Career School</li>
            </ul>
          </div>
          <div>
            <p> Karl has an incredible work ethic, gets things done and is a huge problem solver</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/igbo.jpg')} alt = 'Michael'/> </li>
              <li> Michael Igbo, Technical Support Manager, I-Sight, Ottawa ON </li>
            </ul>
          </div>
          <div>
            <p>blabababababa ababababab</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/ronald.jpg')} alt='ronald'/></li>
              <li>Ronald Ekambi, Elasticsearch Engineer, Fullscript, Ottawa ON</li>
            </ul>
          </div>
          {/* <div>
            <p>bla hahahahahahaha ahhahaaha ahahahaha ahahaha ahaha ah aha aah</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/person4.jpg')} alt='perso 1'/></li>
              <li>Nafi Toure, Ottawa ON</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export default AboutD;
