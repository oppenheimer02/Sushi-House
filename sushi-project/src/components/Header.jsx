import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
<div className='name'>
  <h1>
    <span> The Sushi House </span>
  </h1>
  <p className='details'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  <a href='#services' className='cv-btn'>Our Services</a>
   </div>
    </div>
  )
}

export default Header;
