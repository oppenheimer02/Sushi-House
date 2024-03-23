import React from 'react'

function ContactUsInfo(props) {
  return (
    <div id='contactusinfo'>
      
      <div className='h-text'>
      <h2 >{ props.branch }</h2>
      <h3> {props.contactno}</h3>
     
      <p> {props.branchdtl} </p>

      </div>
    </div>
  )
}

export default ContactUsInfo;
