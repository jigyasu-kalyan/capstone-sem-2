import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import styles from './Header.module.css'

function Header() {

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/Login");
  };

  return (
    <div className={styles.container}>
        <div className={styles.logo}>MindfulU</div>
        <div className={styles.navbar}>
            <nav className={styles.navLinkContainer}>
                <a href='/' className={styles.navLink}>Home</a>
                <a href='/services' className={styles.navLink}>Services</a>
                <a href='/blog' className={styles.navLink}>Blogs</a>
                <a href='/about' className={styles.navLink}>About Us</a>
            </nav>

            <div className={styles.authButtons}>
              {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <a href='/login'><button>Login</button></a>
                  <a href='/login'><button>Sign Up</button></a>
                </>
              )}
            </div>
        </div>
    </div>
  )
}

export default Header