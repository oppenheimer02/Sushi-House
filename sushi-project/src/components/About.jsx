import React from 'react'
import logo from '../images/Sushi-House-Logo.jpg';

function About() {
  return (
    <div id='about'>
      <h1>
       About us 
      </h1>
    <h4>Sushi House Nepal</h4>
    <div id='about-text'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis odio doloribus quasi! Recusandae ipsam quos est at vitae iusto consequatur, adipisci architecto mollitia rerum assumenda velit nulla, optio repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis recusandae rerum quam beatae molestias harum? Minus minima molestiae numquam ipsum? Voluptas officiis unde dicta harum corrupti alias inventore possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque corporis odio doloribus quasi! Recusandae ipsam quos est at vitae iusto consequatur, adipisci architecto mollitia reruum.
    </p> 
    <div className='about-image'>
     
    <img  src= {logo} alt='logo'/>
    </div>
    
    </div>  <a href='/' className='cv-btn2'>Read more</a>
    </div>
  )
}

export default About;
