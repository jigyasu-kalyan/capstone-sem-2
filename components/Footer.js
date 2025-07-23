"use client";
import React from 'react';
import './Footer.css'
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerColumns">
        <div className="footerColumn">
          <h3>MindfulU</h3>
          <p>Empowering your mental well-being through awareness, support, and resources.</p>
        </div>

        <div className="footerColumn">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footerColumn">
          <h4>Follow Us</h4>
          <ul>
            <li><Link href="#">Instagram</Link></li>
            <li><Link href="#">LinkedIn</Link></li>
            <li><Link href="#">Twitter</Link></li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2025 MindfulU. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
