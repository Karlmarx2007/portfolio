import {useFormik} from 'formik';
import * as Yup from 'yup';
import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import './ContactA.scss';
import Success from '../../success/Success';

const ContactA = () => {
  const [success, setSuccess] = useState(false);
  const [ formValues, setFormValues ] = useState({});
  const phoneRegExp = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;
  useEffect(() => {
    
    const sendEmail = async () => {
      if (Object.keys(formValues).length) {
        try {
          await axios.post('https://cannabis-go.herokuapp.com/api/portfolio/send-email', {
            ...formValues
          });
          setSuccess(true);
        } catch (error) {
          console.log(error);
        }
      }
    }
    sendEmail();
  }, [formValues])
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      phoneNumber: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('*Required'),
      email: Yup.string().email('Invalid email address').required('*Required'),
      subject: Yup.string().required('*Required'),
      phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('*Required'),
      message: Yup.string().required('*Required'),
    }),
    onSubmit: values => {
      setFormValues(values);
      formik.resetForm();
      setFormValues({});
    },
  });

  return (
    <Fragment>
      {success ? <Success success={()=> setSuccess(false)}/> : null}
      <section id='contact-a' className='text-center py-3'>
      <div className='container'>
        <h2 className='section-title'>Contact Me</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Here's how I can be reached...</p>
        <form onSubmit={formik.handleSubmit}>
          <div className='text-fields'>
            <div className = 'text-input ' >
             <input
              type='text'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className='name-input'
              placeholder='Name...' /> 
              {formik.touched.name && formik.errors.name ?
                (<div className='warning'> {formik.errors.name} </div>) : null
              }
            </div>
            <div className = 'text-input' >
              <input
                type='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className = 'email-input'
                placeholder = 'Email...' / > 
                {
                  formik.touched.email && formik.errors.email ?
                    (<div className='warning'> {formik.errors.email} </div>) : null
                }
            </div>
            <div className='text-input' >
              <input
                type='text'
                name='subject'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className='subject-input'
                placeholder='Subject...' />
              {
                formik.touched.subject && formik.errors.subject ?
                  ( <div className='warning'> {
                      formik.errors.subject
                    } </div>) : null
                  }
            </div>
            <div className='text-input' >
              <input
                type='text'
                name='phoneNumber'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className='phone-input'
                placeholder='Phone Number...' />
                {
                  formik.touched.phoneNumber && formik.errors.phoneNumber ?
                  (<div className='warning'> {
                    formik.errors.phoneNumber
                  } </div>) : null
                }
            </div>
            <textarea
              type='text'
              name='message'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
                className='text-input message-input' />
              {
                formik.touched.message && formik.errors.message ?
                ( <div className='warning'> {
                    formik.errors.message
                  } </div>) : null
                }
          </div>
          <button type='submit' className='btn-dark' >Submit</button>
        </form>
      </div>
    </section>
    </Fragment>
  );
}
export default withRouter(ContactA);
