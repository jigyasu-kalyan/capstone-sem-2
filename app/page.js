'use client';

import Image from "next/image";
import "./page.css";
import Header from "@/components/Header";
import FeaturedServiceCard from "@/components/FeaturedServicesCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

const featuredServices = [
  {
    imageSrc: "/IndividualCounselling.png",
    title: "Individual Counselling",
    description: "Personalized therapy sessions with experienced counsellors to address your specific needs.",
  },
  {
    imageSrc: "/GroupMeditation.png",
    title: "Group Meditation",
    description: "Join our guided meditation sessions to reduce stress and enhance mindfulness.",
  },
  {
    imageSrc: "/WellnessWorkshops.png",
    title: "Wellness Workshops",
    description: "Participate in interactive workshops focused on various aspects of mental wellness.",
  }
];

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section Code */}
      <div className="heroSection">
        <div className="heroImageContainer">
          <Image src="/HeroSectionImage.jpg" alt="Mindful" fill />
          <div className="overlayText">
            <h1>Find Your Inner Peace</h1>
            <p>Welcome to MindfulU, your personal guide to mental wellness.</p>
            <Link href="/services"><button>Explore Services</button></Link>
          </div>
        </div>
      </div>

      {/* Featured Services Section Code */}
      <div className="featuredSection">
        <h2>Featured Services</h2>
        <div className="featuredSectionCardContainer">
          {featuredServices.map((service, index) => (
            <FeaturedServiceCard
              key = {index}
              imageSrc = {service.imageSrc}
              title = {service.title}
              description = {service.description}
            />
          ))}
        </div>
      </div>

      {/* Contact Us Section Code */}
      <Contact />

      {/* Footer Section Code */}
      <Footer />
    </div>
  );
}
