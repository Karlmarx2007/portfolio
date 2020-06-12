import React from 'react';
import './Success.scss';

const Success = (props) => {
  return (
    <section className='py-4'>
      <div className='container'>
        <div className='card'>
          <h2 className='item'>Message sent successfully</h2>
          <p className='item'>Karl Matuke has received your message and will contact you shortly. Thank you</p>
          <button className='btn-dark' onClick={props.success}>OK</button>
        </div>
      </div>
    </section>
  )
}

export default Success;