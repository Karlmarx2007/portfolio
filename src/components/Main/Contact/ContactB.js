import React from 'react';
import './ContactB.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactB = () => {
  return (
    <section id='contact-b' className='bg-dark py-3'>
      <div className='container'>
        <div className='contact-info'>
          <div>
            <FontAwesomeIcon icon="envelope" size='2x' className='fas'/>
            <h3>Email</h3>
            <p>kmatuke@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon="phone" size='2x' className='fas'/>
            <h3>Phone</h3>
            <p>(613)-700-0688</p>
          </div>
          <div>
            <FontAwesomeIcon icon="address-card" size='2x' className='fas'/>
            <h3>Address</h3>
            <p>007-15 Woodridge Crescent, Nepean ON.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactB;
