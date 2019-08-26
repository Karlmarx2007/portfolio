import React from 'react';
import HeaderIner from '../../Header/HeaderIner';
import ContactA from './ContactA';
import ContactB from './ContactB';
import ContactC from './ContactC';
import Footer from '../../Footer/Footer';

const Contact = () => {
  return (
    <div>
      {/*current would be used to style Contact when selected on MainNavBar*/}
      <HeaderIner contact='current'/>
      <ContactA />
      <ContactB />
      <ContactC />
      <Footer />
    </div>
  );
}

export default Contact;
