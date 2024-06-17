import React from 'react'
import './ContactInfoCard.css'
import Image from 'next/image'
import Link from 'next/link'

function ContactInfoCard({iconUrl, text}) {
  return (
    <div className='contact-details-card'>
      <Link href={text} className="icon">
        <Image src={iconUrl} alt={text} width={50} height={50}/>
      </Link>
      {/* <p className='text-center text-[12px] md:text-[17px]'>{text}</p> */}
    </div>
  )
}

export default ContactInfoCard
