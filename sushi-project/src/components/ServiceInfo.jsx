import React from 'react'

function ServiceInfo(props) {
  return (
 
      <div id='services-box'>
      
      <div id='service-img'>
        <img src={props.image} alt=''/>
        </div>
        <div className='h2-text'>
      <h2 >{ props.title }</h2>
     
      <p> {props.details} </p>

      </div>
      
    </div>
   
  )
}

export default ServiceInfo;
