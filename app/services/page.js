'use client';

import React from 'react';
import './services.css';
import servicesData from './ServicesData.js';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Services() {
  return (
    <>
      <Header />

      <div className="servicesContainer">
        <h1 className="heading">Our Services</h1>
        <div className="serviceList">
          {servicesData.map((service, index) => (
            <div key={index} className="serviceCard">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={80} 
                height={80} 
                className="serviceImage"
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link href={service.link} className="learnMore">Learn More →</Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
