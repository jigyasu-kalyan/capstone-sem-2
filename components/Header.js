
import React, {useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import './Header.css'
import Link from 'next/link';

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
    router.push("/login");
  };

  return (
    <div className="container">
        <div className="logo">MindfulU</div>
        <div className="navbar">
            <nav className="navLinkContainer">
                <Link href='/' className="navLink">Home</Link>
                <Link href='/services' className="navLink">Services</Link>
                <Link href='/blog' className="navLink">Blogs</Link>
                <Link href='/about' className="navLink">About Us</Link>
            </nav>

            <div className="authButtons">
              {isLoggedIn ? (
                <button onClick="handleLogout">Logout</button>
              ) : (
                <>
                  <Link href='/login'><button>Login</button></Link>
                  <Link href='/login'><button>Sign Up</button></Link>
                </>
              )}
            </div>
        </div>
    </div>
  )
}

export default Header