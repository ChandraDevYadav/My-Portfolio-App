"use client";
import React, { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = `${form.get("firstname")} ${form.get("lastname")}`.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const message = encodeURIComponent(`Name: ${name}\nPhone: ${form.get("phoneno") || "Not provided"}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
    setStatus("Opening your email app...");
    window.location.href = `mailto:yadavchandradev4@gmail.com?subject=${subject}&body=${message}`;
  }

  return (
    <div className='contact-form-content'>
      <form onSubmit={handleSubmit}>
        <div className="name-container">
            <input type="text" name='firstname' placeholder='First Name' required />
            <input type="text" name='lastname' placeholder='Last Name' />
            <input type="text" name='phoneno' placeholder='Phone No' />
        </div>
        <input type="email" name='email' placeholder='Email' required />
        <textarea name="message" cols="3" rows="3" placeholder='Tell me about your project' required></textarea>
        <button type="submit">START A CONVERSATION</button>
        <p className="contact-status" aria-live="polite">{status}</p>
      </form>
    </div>
  )
}

export default ContactForm
