import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div className='contact-form-content'>
      <form action="">
        <div className="name-container">
            <input type="text" name='firstname' placeholder='First Name' />
            <input type="text" name='lastname' placeholder='Last Name' />
            <input type="text" name='phoneno' placeholder='Phone No' />
        </div>
        <input type="text" name='email' placeholder='Email' />
        <textarea name="message" id="" cols="3" rows="3" placeholder='Message'></textarea>
        <button>SEND</button>
      </form>
    </div>
  )
}

export default ContactForm
