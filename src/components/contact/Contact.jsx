import React from 'react';
import './Contact.scss';
import email from './../../icons/email.svg';
import linkedin from './../../icons/linkedin.svg';
import github from './../../icons/github.svg';

const Contact = () => {
  return (
    <section className='contact section'>
      <h1 className='script-heading contact-heading'>Keep in touch</h1>
      <ul className='contact-logos'>
        <li className='contact-logo-item'><a href="mailto:mail2richardpan@gmail.com" target="_blank"><img src={email} alt="Email" /></a></li>
        <li className='contact-logo-item'><a href="https://www.linkedin.com/in/richardpanux/" target="_blank"><img src={linkedin} alt="LinkedIn" /></a></li>
        <li className='contact-logo-item'><a href="https://github.com/ttcode10" target="_blank"><img src={github} alt="GitHub" /></a></li>
      </ul>
    </section>
  );
}

export default Contact;
