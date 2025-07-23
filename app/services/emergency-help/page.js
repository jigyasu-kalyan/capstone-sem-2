'use client';

import React from 'react';
import './emergency-help.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EmergencyHelp = () => {
  return (
    <>
        <Header />

        <div className="emergencyContainer">
        <h1 className="emergencyHeading">Emergency Help</h1>
        <p className="emergencyDescription">
            If you&apos;re in crisis or feeling overwhelmed, you are not alone. Reach out to someone immediately. Below are resources you can use right now:
        </p>

        <div className="emergencyCard">
            <h2>Helpline Numbers (India)</h2>
            <ul>
            <li><strong>iCall:</strong> +91 9152987821 (24x7, free and confidential)</li>
            <li><strong>Vandrevala Foundation:</strong> 1860 266 2345 / 9999 666 555</li>
            <li><strong>Fortis Stress Helpline:</strong> +91 8376804102</li>
            </ul>
        </div>

        <div className="emergencyCard">
            <h2>Online Chat Services</h2>
            <p>You can also reach out through chat-based services:</p>
            <ul>
            <li><a href="https://www.icallhelpline.org" target="_blank" rel="noopener noreferrer">iCall Helpline Website</a></li>
            <li><a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer">7 Cups of Tea</a></li>
            </ul>
        </div>

        <div className="emergencyCard">
            <h2>What You Can Do Right Now</h2>
            <ul>
            <li>Call a trusted friend or family member</li>
            <li>Do slow, deep breathing</li>
            <li>Move to a quiet and safe space</li>
            <li>Seek professional help as soon as possible</li>
            </ul>
        </div>
        </div>

        <Footer />
    </>
  );
}

export default EmergencyHelp;
