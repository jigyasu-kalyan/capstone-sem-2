'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';

function Login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!email || !password) {
      alert('Please fill in both email and password');
      // return;
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
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Login to your MindfulU account</p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>

        <p className={styles.signupPrompt}>
          Don't have an account? <a href="#" className={styles.signupLink}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
