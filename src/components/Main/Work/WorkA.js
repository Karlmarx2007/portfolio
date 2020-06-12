import React from 'react';
import './WorkA.scss';

const WorkA = () => {
  return (
    <section id='work-a' className='py-3 text-center'>
      <div className='container'>
        <h2 className='section-title'>My Work</h2>
        <div className='bottom-line'/>
        <p className='lead'>Checkout some of my work</p>
        <div className='items'>
          <a href = "https://sc.qccareerschool.com/" target="_blank">
            <div className = 'item' >
              <div className = 'item-image' >
                <img src = {require('./../../../dist/img/items/qc.png')} alt = 'QC Career School'/>
              </div>
              <div className='item-text' >
                <div className = 'item-text-wrap' >
                  <p className='item-text-category'>Student Center</p>
                  <h2 className='item-text-title'>QC Career School</h2>
                </div>
              </div>
            </div>
          </a>
          <a href="https://cannabisfront.herokuapp.com/" target="_blank">
            <div className = 'item'>
              <div className = 'item-image' >
                <img src={require('./../../../dist/img/items/dispensary.png')} alt = 'item2'/>
              </div>
            <div className = 'item-text' >
              <div className = 'item-text-wrap' >
                  <p className='item-text-category' > Dispensary </p>
                  <h2 className = 'item-text-title' > E - commerce web app </h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkA;
