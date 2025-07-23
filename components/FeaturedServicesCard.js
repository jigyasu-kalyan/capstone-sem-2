"use client";
import Image from "next/image";
import "./FeaturedServicesCard.css";
import Link from "next/link";

export default function FeaturedServiceCard({ imageSrc, title, description }) {
  return (
    <div className="card">
      <div className="imageWrapper">
        <Image src={imageSrc} alt={title} width={300} height={200} className="image" />
      </div>
      <div className="featuredServiceCardContent">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
