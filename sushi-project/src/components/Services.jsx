import React from 'react'
import ServiceInfo from './ServiceInfo';
import Sushi1 from '../images/Sushi-1.jpg';
import Sushi4 from '../images/Sushi-4.jpg';
import Sushi5 from '../images/Sushi-5.jpg';

function Services() {
  return (
    <div id='services'>
      <h1> SERVICES </h1>
      <div className='a-container'>
        <ServiceInfo image= {Sushi1} title= 'SUSHI TRAINING' details=' loremdjfjfjdjgdjgjdgnjgndnngjdggngdjdjddj ' />
        <ServiceInfo image= {Sushi4} title= 'SUSHI RESTURANT' details=' loremdjfjfjdjgdjgjdgnjgndnngjdggngdjdjddj ' />
        <ServiceInfo image= {Sushi5} title= 'SUSHI DELIVERY' details=' loremdjfjfjdjgdjgjdgnjgndnngjdggngdjdjddj ' />
        
         </div>
    </div>
  )
}

export default Services;
