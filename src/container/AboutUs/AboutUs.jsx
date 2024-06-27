import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
    </div>
    <div className='app__aboutus-content flex-start-center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon'/>
        <p className='p__openans'>From Family Legacy to Fresh Catch: Our Seafood Story

          Passion and opportunity came together to create Chemmeen Naadan SeaFood Restaurant, a dream built by four individuals who share a deep love for the ocean's bounty. Fueled by a family legacy in seafood exporting, we noticed a gap in the local market - a lack of truly fresh, high-quality seafood. We believe people deserve to experience the unparalleled taste of the ocean, not the muted flavors of frozen and aged fish.

          That's why our mission is simple: to deliver the freshest possible seafood, straight from the docks to your plate. We source our ingredients daily, ensuring peak quality and vibrant flavors. We want you to savor the true essence of the sea with every bite.

          Here at Chemmeen Naadan SeaFood Restaurant, we're not just passionate about seafood, we're passionate about sharing it with you.</p>
      </div>
      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt='about_knife'/>
      </div>
      <div className='app__aboutus-content_history '>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon' />
        <p className='p__openans'>Chemmeen Naadan SeaFood Restaurant was born from a rich tradition of seafood expertise. Our founders come from families with a long history in seafood exporting, giving them an in-depth understanding of what makes seafood truly exceptional. They saw an opportunity to bring this knowledge and passion to the local dining scene, providing a seafood experience unlike any other.

          From the moment we opened our doors, our commitment has been to quality and freshness. We work closely with local fishermen and suppliers, ensuring that our seafood is caught and delivered with the utmost care. Every dish we serve is a testament to our dedication to bringing you the best the ocean has to offer.

          Join us at Chemmeen Naadan SeaFood Restaurant and become part of our story. Enjoy the freshest, most flavorful seafood and discover the difference that true passion and dedication can make.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
