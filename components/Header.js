import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>MindfulU</div>
        <div className={styles.navbar}>
            <nav className={styles.navLinkContainer}>
                <a href='/' className={styles.navLink}>Home</a>
                <a href='#' className={styles.navLink}>Services</a>
                <a href='#' className={styles.navLink}>Blogs</a>
                <a href='#' className={styles.navLink}>About Us</a>
            </nav>
            <div className={styles.authButtons}>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Header