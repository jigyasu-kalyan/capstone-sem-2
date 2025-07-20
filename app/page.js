import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import FeaturedServiceCard from "@/components/FeaturedServicesCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
  },
  // Add more objects here if needed
];

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Section Code */}
      <div className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image src="/HeroSectionImage.jpg" alt="Mindful" fill />
          <div className={styles.overlayText}>
            <h1>Find Your Inner Peace</h1>
            <p>Welcome to MindfulU, your personal guide to mental wellness.</p>
            <button>Explore Services</button>
          </div>
        </div>
      </div>

      {/* Featured Services Section Code */}
      <div className={styles.featuredSection}>
        <h2>Featured Services</h2>
        <div className={styles.featuredSectionCardContainer}>
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
