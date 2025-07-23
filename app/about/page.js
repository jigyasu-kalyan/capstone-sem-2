'use client';

import React from 'react';
import './about.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const About = () => {
  return (
    <>
        <Header />

        <div className="aboutContainer">
        <h1 className="aboutHeading">About Us</h1>

        <section className="aboutSection">
            <h2>Our Mission</h2>
            <p>
            Our mission is to promote mental wellness by providing informative resources,
            curated blogs, and a supportive digital space for individuals seeking clarity,
            balance, and peace of mind.
            </p>
        </section>

        <section className="aboutSection">
            <h2>Our Story</h2>
            <p>
            Started as a college project, this platform reflects a passion for emotional
            wellbeing and awareness. With rising stress among students and professionals,
            this initiative aims to bridge the gap between help and those in need.
            </p>
        </section>

        <section className="aboutSection">
            <h2>The Creator</h2>
            <p>
            Hi, I&apos;m Jigyasu Kalyan, a college student with a deep interest in mental health,
            technology, and creating meaningful change. This solo project is my contribution
            toward building a more mindful and supportive digital community.
            </p>
        </section>

        <section className="aboutSection">
            <h2>Contact</h2>
            <p>
            Feel free to reach out via email: <Link href="mailto:email@example.com">email@example.com</Link>
            </p>
        </section>
        </div>

        <Footer />
    </>
  );
};

export default About;
