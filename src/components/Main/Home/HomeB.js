import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeB.scss';

const HomeB = () => {
  return (
    <section id='home-b' className='text-center py-2'>
      <div className='stats'>
        <div>
          <ul>
            <li><FontAwesomeIcon icon="users" size='3x' className='fas'/></li>
            <li className='stats-title'>Clients</li>
            <li className='stats-number'>3</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon icon="award" size='3x' className='fas'/></li>
            <li className='stats-title'>Awards</li>
            <li className='stats-number'>-</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon icon="hourglass-start" size='3x' className='fas'/></li>
            <li className='stats-title'>Years of experience</li>
            <li className='stats-number'>4</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><FontAwesomeIcon icon="code-branch" size='3x' className='fas'/></li>
            <li className='stats-title'>Projects completed</li>
            <li className='stats-number'>4</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HomeB;
