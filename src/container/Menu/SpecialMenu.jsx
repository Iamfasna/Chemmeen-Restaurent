import React from 'react';

import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';
import {images} from '../../constants';
import {data} from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext__cormorant'>Everyday we have specials!!</h1>
    </div>
    <div className='main-div'>
      <div className='curry-div'>
        <div className='app__specialMenu-menu_img'>
          <img src={images.fishcurry} alt='curry'/>
        </div>
        <div className='app__specialMenu-menu' >
          <div className='app__specialMenu-menu_curry'>
            <p>Curry</p>
            <div className='app__specialMenu-menu_items'>
              {data.curry.map((curry, index) => (<p>
                <MenuItem key={curry.title + index} title={curry.title} price={curry.price} tags={curry.tags} />
              </p>))}
            </div>
          </div>
        </div>
      </div>

      <div className='Tawa-div'>
        <div className='app__specialMenu-menu_img'>
          <img src={images.Tawa} alt='tawa'/>
        </div>
        <div className='app__specialMenu-menu' >
          <div className='app__specialMenu-menu_Tawa'>
            <p>Tawa</p>
            <div className='app__specialMenu-menu_items'>
              {data.Tawa.map((Tawa, index) => (<p>
                <MenuItem key={Tawa.title + index} title={Tawa.title} price={Tawa.price} tags={Tawa.tags} />
              </p>))}
            </div>
          </div>
        </div>
      </div>
    </div >
  </div >
);

export default SpecialMenu;
