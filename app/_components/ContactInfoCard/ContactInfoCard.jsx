import React from 'react'
import './ContactInfoCard.css'
import Image from 'next/image'

function ContactInfoCard({iconUrl, text}) {
  return (
    <div className='contact-details-card'>
      <div className="icon">
        <Image src={iconUrl} alt={text} width={50} height={50}/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
