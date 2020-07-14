import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Contact.scss';
import email from './../../icons/email.svg';
import linkedin from './../../icons/linkedin.svg';
import github from './../../icons/github.svg';

const Contact = () => {
  const [clickboard, setClickboard] = useState({
    copied: false
  });

  const hideTooltip = () => {
    setTimeout(() => {
      setClickboard({
        copied: false,
      })
    }, 2000);
  }

  return (
    <section className='contact section'>
      <h1 className='script__heading contact__heading'>Keep in touch</h1>
      <ul className='contact__logos'>
        <li className='contact__logo-item'>
          <CopyToClipboard text='mail2richardpan@gmail.com' onCopy={() => {
            setClickboard({
              copied: true,
            });
            hideTooltip();
          }}>
            <img src={email} alt="Email" />
          </CopyToClipboard>
          {
            clickboard.copied ? <div className='contact__tooltip'>Email copied</div> : null
          }
        </li>
        <li className='contact__logo-item'>
          <a href="https://www.linkedin.com/in/richard--pan/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li className='contact__logo-item'>
          <a href="https://github.com/ttcode10" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
