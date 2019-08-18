import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer id='main-footer'>
      <div className='footer-content container'>
        <p>Copyright &copy; 2019. All Rights Reserved</p>
        <div className='social'>
          <FontAwesomeIcon icon={['fab', 'facebook']} className='fab'/>
          <FontAwesomeIcon icon={['fab', 'instagram']} className='fab'/>
          <FontAwesomeIcon icon={['fab', 'twitter']} className='fab'/>
          <FontAwesomeIcon icon={['fab', 'linkedin']} className='fab'/>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
