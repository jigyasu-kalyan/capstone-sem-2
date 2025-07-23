'use client';

import Header from '@/components/Header';
import './counselling.css';
import Image from 'next/image';
import Footer from '@/components/Footer';

const counsellors = [
  {
    name: 'Dr. Neha Sharma',
    specialization: 'Anxiety & Stress',
    image: '/Counsellor1.jpg',
    availability: 'Mon - Fri, 10am - 6pm'
  },
  {
    name: 'Mr. Rohan Mehta',
    specialization: 'Youth & Career Counselling',
    image: '/Counsellor2.jpg',
    availability: 'Weekends, 11am - 4pm'
  },
  {
    name: 'Dr. Anjali Desai',
    specialization: 'Depression & Relationships',
    image: '/Counsellor3.jpg',
    availability: 'Mon, Wed, Fri, 2pm - 8pm'
  }
];

const Counselling = () => {
  return (
    <>
      <Header />

      <div className="counsellingContainer">

        <section className="counsellingHero">
          <h1>Connect with Certified Mental Health Professionals</h1>
          <p>Private • Confidential • Experienced Counsellors</p>
          <button className="counsellingButton">Book a Session</button>
        </section>

        <section className="whySection">
          <h2>Why Individual Counselling?</h2>
          <ul>
            <li>Personalised one-on-one support</li>
            <li>Judgement-free safe space</li>
            <li>Flexible online & offline options</li>
            <li>Evidence-based therapy practices</li>
          </ul>
        </section>

        <section className="counsellorsSection">
          <h2>Our Counsellors</h2>
          <div className="counsellingCardGrid">
            {counsellors.map((counsellor, idx) => (
              <div key={idx} className="counsellingCard">
                <Image
                  src={counsellor.image}
                  alt={counsellor.name}
                  width={100}
                  height={100}
                  className="counsellingProfileImg"
                />
                <h3>{counsellor.name}</h3>
                <p>{counsellor.specialization}</p>
                <span className="counsellorAvailability">{counsellor.availability}</span>
                <button className="counsellorConnectBtn">Connect</button>
              </div>
            ))}
          </div>
        </section>

        <section className="howItWorks">
          <h2>How It Works</h2>
          <ol>
            <li>Choose a counsellor</li>
            <li>Pick a time that suits you</li>
            <li>Join your secure session</li>
          </ol>
        </section>

        <section className="counsellingFooter">
          <h2>You don&apos;t have to go through it alone.</h2>
          <button className="counsellingButton">Find a Counsellor</button>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Counselling;