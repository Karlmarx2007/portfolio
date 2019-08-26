import React from 'react';
import './HomeC.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomeC = () => {
  return (
    <section id='home-c' className='text-center py-2'>
      <div className='container'>
        <h2 className='section-title'>Creative Process</h2>
        <div className='bottom-line'></div>
        {/*<p className='lead'>BLA BLA bla bla bla</p>*/}
        <div className='process'>
          <div>
            <i>
              <div className='process-step'>1</div>
              <FontAwesomeIcon icon="file-alt" size='4x' className='process-icon my-2' />
            </i>
            <h3 className='icon-title'>Discuss Project</h3>
            {/* <p>Project project peoject project</p> */}
          </div>
          <div>
            <i>
              <div className='process-step'>2</div>
              <FontAwesomeIcon icon="desktop" size='4x' className='process-icon my-2' />
            </i>
            <h3 className='icon-title'>Brainstorming ^ Concept</h3>
            {/*<p>Project project peoject project</p>*/}
          </div>
          <div>
            <i>
              <div className='process-step'>3</div>
              <FontAwesomeIcon icon="object-ungroup" size='4x' className='process-icon my-2' />
            </i>
            <h3 className='icon-title'>UI/UX Planning</h3>
            {/*<p>Project project peoject project</p>*/}
          </div>
          <div>
            <i>
              <div className='process-step'>4</div>
              <FontAwesomeIcon icon="thumbs-up" size='4x' className='process-icon my-2' />
            </i>
            <h3 className='icon-title'>Interaction</h3>
            {/*<p>Project project peoject project</p>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeC;
