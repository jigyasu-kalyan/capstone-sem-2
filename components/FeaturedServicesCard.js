"use client";
import Image from "next/image";
import "./FeaturedServicesCard.css";

export default function FeaturedServiceCard({ imageSrc, title, description }) {
  return (
    <div className="featuredServiceCard">
      <div className="featuredServiceImageWrapper">
        <Image src={imageSrc} alt={title} width={300} height={200} className="image" />
      </div>
      <div className="featuredServiceCardContent">
        <h3 className="featuredServiceTitle">{title}</h3>
        <p className="featuredServiceDescription">{description}</p>
      </div>
    </div>
  );
}
