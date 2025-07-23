'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './login.css';
import Link from 'next/link';

const Login = () => {

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email || !password) {
      alert('Please fill in both email and password');
    }

    if (email === 'admin@gmail.com' && password === 'admin1234') {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="loginWrapper">
      <div className="loginCard">
        <h2 className="loginTitle">Welcome Back</h2>
        <p className="loginSubtitle">Login to your MindfulU account</p>
        
        <form className="loginForm" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className="loginInput" />
          <input type="password" placeholder="Password" className="loginInput" />
          
          <button type="submit" className="loginButton">Login</button>
        </form>

        <p className="signupPrompt">
          Don&apos;t have an account? <Link href="#" className="signupLink">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
