import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <div className={styles.contactUsContainer}>
        <h2>Contact Us</h2>
        <div className={styles.contactUsInputBoxes}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
        </div>
        <label className={styles.checkboxLabel}>
          <input type='checkbox' />
          I agree to get updates and news about MindfulU through emails.
        </label>

        <button className={styles.submitButton} type='submit'>Submit</button>
    </div>
  )
}

export default Contact