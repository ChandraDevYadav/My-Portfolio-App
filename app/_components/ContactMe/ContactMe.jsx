import React from 'react'
import './ContactMe.css'
import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'
import ContactForm from '../ContactForm/ContactForm'

function ContactMe() {
  return (
    <div className='contact-container'>
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-x-2">
            <ContactInfoCard iconUrl='/i.png' text='https://www.instagram.com/chandradev661/' />
            <ContactInfoCard iconUrl='/f.png' text='https://www.facebook.com/devboss.dev.3' />
            <ContactInfoCard iconUrl='/g.png' text='https://github.com/ChandraDevYadav2000' />
            <ContactInfoCard iconUrl='/x.png' text='https://x.com/CHANDRA28653144' />
            <ContactInfoCard iconUrl='/tr.png' text='https://www.threads.net/@chandradev661' />
            <ContactInfoCard iconUrl='/d.png' text='https://discord.com/channels/@me' /> 
            </div>
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
