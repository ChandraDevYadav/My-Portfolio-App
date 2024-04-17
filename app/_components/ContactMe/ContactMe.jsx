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
            <ContactInfoCard iconUrl='/i.png' text='chandradev661' />
            <ContactInfoCard iconUrl='/f.png' text='Chan Dra Dev Yadav' />
        </div>
        <div style={{ flex: 1 }}>
            <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
