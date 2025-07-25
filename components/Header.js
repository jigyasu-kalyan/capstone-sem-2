'use client';

import React, {useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import './Header.css'
import Link from 'next/link';

const Header = () => {

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
    <div className="headerContainer">
        <div className="logo">MindfulU</div>
        <div className="navbar">
            <nav className="navLinkContainer">
                <Link href='/' className="navLink">Home</Link>
                <Link href='/services' className="navLink">Services</Link>
                <Link href='/Blog' className="navLink">Blogs</Link>
                <Link href='/about' className="navLink">About Us</Link>
            </nav>

            <div className="authButtons">
              {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <button onClick={() => router.push('/Login')}>Login</button>
                  <button onClick={() => router.push('/Login')}>Sign Up</button>
                </>
              )}
            </div>
        </div>
    </div>
  )
}

export default Header;