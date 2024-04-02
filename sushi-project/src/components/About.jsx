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
    <p>Welcome to Sushi House NEPAL, where culinary artistry meets Japanese tradition! Nestled in the heart of Northeastern Pennsylvania, our restaurant is a haven for sushi enthusiasts and Japanese cuisine aficionados alike.

At Sushi House NEPAL, we are dedicated to crafting authentic dishes that transport your taste buds to the bustling streets of Tokyo. Our chefs, trained in the time-honored techniques of sushi-making, delicately prepare each roll with precision and passion, ensuring an unforgettable dining experience with every bite.

But our commitment to excellence doesn't stop at sushi. From savory tempura to mouthwatering teriyaki, our menu boasts a wide array of Japanese classics, each dish meticulously crafted to tantalize your palate and satisfy your cravings.

So come join us at Sushi House NEPA, where every meal is a culinary journey through the rich and vibrant flavors of Japan. We look forward to welcoming you and sharing the magic of Japanese cuisine with you soon.
    </p> 
    <div className='about-image'>
     
    <img  src= {logo} alt='logo'/>
    </div>
    
    </div>  <a href='/' className='cv-btn2'>Read more</a>
    </div>
  )
}

export default About;
