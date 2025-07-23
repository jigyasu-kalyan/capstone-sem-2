'use client';

import React from 'react';
import styles from './services.css';
import servicesData from './ServicesData.js';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function Services() {
  return (
    <>
      <Header />

      <div className={styles.servicesContainer}>
        <h1 className={styles.heading}>Our Services</h1>
        <div className={styles.serviceList}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <Image 
                src={service.image} 
                alt={service.title} 
                width={80} 
                height={80} 
                className={styles.serviceImage}
              />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link href={service.link} className={styles.learnMore}>Learn More →</Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
