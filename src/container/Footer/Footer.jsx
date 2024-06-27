import React from 'react';

import './Footer.css';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => (
  <div className='app__footer section__padding' id='contact'>
    <div className='footer-div'>
      <div className='content-div'>
        <div className='heading'>Contact Us</div>
        <div className='content-inside'>
          <p><a href="tel:+919037741923">+91 9037741923</a></p>
          <p><a href="tel:+919947258954">+91 9947258954</a></p>
          <p><a href="tel:+919645350857">+91 9645350857</a></p>
          <p><a href="tel:+917736520859">+91 7736520859</a></p>
        </div>
      </div>
      <div className='content-div-title'>
        <p className='Address'>Chemmeen Naadan Seafood</p>
        <h5 style={{
          color: 'white'
        }}>Seaport airport road
          Near kakkanad water metro station
          Chittethukara, kakkanad, pincode: 682037</h5>
      </div>
      <div className='content-div'>
        <div className='heading'>Working Hours</div>
        <div className='content-inside'>
          <p>Monday-Saturday</p>
          <p>11.00 AM - 7.00PM</p>
        </div>
      </div>
    </div>
  </div >
);

export default Footer;
