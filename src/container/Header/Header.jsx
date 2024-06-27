import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    <div className='app__wrapper__info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Chemmen: Embark on a Seafood Journey from Ocean to Table. Delight in Fresh, Locally-Sourced Catches, Crafted with Passion and Precision. Experience the Taste of the Sea, Elevated to Perfection at Chemmen</p>
      <button type='button' className='custom__button' >Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.chemmeen} alt='header img' />
    </div>
  </div >
);

export default Header;
