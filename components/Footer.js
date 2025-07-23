import React from 'react'
import styles from './Footer.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>MindfulU</h3>
          <p>Empowering your mental well-being through awareness, support, and resources.</p>
        </div>

        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 MindfulU. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
