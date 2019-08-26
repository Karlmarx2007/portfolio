import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer id='main-footer'>
      <div className='footer-content container'>
        <p>Copyright &copy; {year}. All Rights Reserved</p>
        <div className='social'>
        <a href="https://github.com/Karlmarx2007"><FontAwesomeIcon icon={['fab', 'github']} className='fab'/></a>
        <a href="https://www.linkedin.com/in/karl-matuke-423a21b1/"><FontAwesomeIcon icon={['fab', 'linkedin']} className='fab'/></a>
        {/*<FontAwesomeIcon icon={['fab', 'instagram']} className='fab'/>
          <FontAwesomeIcon icon={['fab', 'twitter']} className='fab'/> */}

        </div>
      </div>
    </footer>
  );
}
export default Footer;
