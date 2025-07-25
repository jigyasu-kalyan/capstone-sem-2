"use client";
import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contactUsContainer">
        <h2>Contact Us</h2>
        <div className="contactUsInputBoxes">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
        </div>
        <label className="contactUsCheckboxLabel">
          <input type='checkbox' />
          I agree to get updates and news about MindfulU through emails.
        </label>

        <button className="contactUsSubmitButton" type='submit'>Submit</button>
    </div>
  )
}

export default Contact