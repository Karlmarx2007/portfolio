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
            <p> Karl is a great person to work with. Careful, industrious and very friendly - always a pleasure to collaborate with him. </p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/davidgriller.jpg')} alt='David' /></li>
              <li><b>David Griller</b>, CEO, QC Career School, Ottawa ON </li>
            </ul>
          </div>
          <div>
            <p> Karl is a joy to work with. A true team player with an excellent attitude.</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/joanne-edited.jpg')} alt='Joanne'/></li>
              <li><b>Joanne Pendon</b>, COO, QC Career School, Ottawa ON.</li>
            </ul>
          </div>
          <div>
            <p> Karl has an incredible work ethic, gets things done and is a huge problem solver.</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/igbo.jpg')} alt = 'Michael'/> </li>
              <li><b>Michael Igbo</b>, Technical Support Manager, I-Sight, Ottawa ON.</li>
            </ul>
          </div>
          <div>
            <p>Karl has a strong work ethic and a positive attitude. He is creative and has a mind for detail.</p>
            <ul>
              <li><img src={require('./../../../dist/img/testimonials/ronald.jpg')} alt='ronald'/></li>
              <li><b>Ronald Ekambi</b>, Elasticsearch Engineer, Fullscript, Ottawa ON.</li>
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
