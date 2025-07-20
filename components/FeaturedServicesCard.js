import Image from "next/image";
import styles from "./FeaturedServicesCard.module.css";

export default function FeaturedServiceCard({ imageSrc, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} width={300} height={200} className={styles.image} />
      </div>
      <div className={styles.featuredServiceCardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
