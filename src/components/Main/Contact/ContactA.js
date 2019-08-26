import React,{useState} from 'react';
import './ContactA.scss';


const ContactA = () => {
  //const [ error, setEror ] = useState('');
  const [formState, setFormState ] = useState({
      name: '',
      email: '',
      subject: '',
      phoneNumber: '',
      message: '',
      errors: {
        name: '',
        email: '',
        subject: '',
        phoneNumber: '',
        message: ''
      }
  });
  // const formValid = (formErrors) => {
  //   let valid = true;
  //   Object.values(formErrors).forEach(val => {
  //     val.length > 0 && (valid = false);
  //   });
  //   return valid;
  // }
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = formState.errors;
    switch(name) {
      case 'name':
        formErrors.name = value.length === 0 ? 'please enter firstName' : '';
        break;
      case 'email':
        formErrors.email = !validateEmail(value) || value.length === 0 ? 'please valid email' : '';
        break;
      case 'subject':
        formErrors.subject = value.length === 0 ? 'please enter subject' : '';
        break;
      case 'phoneNumber':
        formErrors.phoneNumber = !validatePhoneNumber || value.length === 0 ? 'please enter firstName' : '';
        break;
      case 'message':
        formErrors.message = value.length === 0 ? 'please enter Message to send' : '';
        break;
      default:
        break;
    }
    setFormState({...formState, [e.target.name]: e.target.value});
  }
  const validateEmail = email => {
    var re = RegExp(/\S+@\S+\.\S+/);
    return re.test(email);
  }
  const validatePhoneNumber = phoneNumber => {
    var re = RegExp(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/);
    return re.test(phoneNumber);
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formValid(formState.errors)) {
  //     let data = {
  //       name: formState.name,
  //       email: formState.email,
  //       subject: formState.subject,
  //       phoneNumber: formState.phoneNumber,
  //       message: formState.message
  //     }
  //     //Clear form
  //     setFormState({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       phoneNumber: '',
  //       message: ''
  //     });
  //   }
  //   else {
  //     console.error('form has errors');
  //   }
  //
  // }
  return (
    <section id='contact-a' className='text-center py-3'>
      <div className='container'>
        <h2 className='section-title'>Contact Me</h2>
        <div className='bottom-line'></div>
        <p className='lead'>Here's how I can be reached...</p>
        <form method='post' data-netlify='true' data-netlify-recaptcha='true'>
          <div className='text-fields'>
            <input type='text' name='name' onChange={ handleChange } className='text-input name-input' placeholder='Name...' />
            <input type='email' name='email' onChange={ handleChange } className='text-input email-input' placeholder='Email...' />
            <input type='text' name='subject' onChange={ handleChange } className='text-input subject-input' placeholder='Subject...' />
            <input type='text' name='phoneNumber' onChange={ handleChange } className='text-input phone-input' placeholder='Phone Number...' />
            <textarea type='text' name='message' onChange={ handleChange } className='text-input message-input' ></textarea>
            <div className='my-2'>
              <div data-netlify-recaptcha='true'></div>
            </div>
          </div>
          <button type='submit' className='btn-dark' >Submit</button>
        </form>
      </div>
    </section>
  );
}
export default ContactA;
