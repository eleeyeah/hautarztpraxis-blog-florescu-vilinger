import Image from "next/image";
import styles from "./page.module.css";
import Doctors from "public/Doctors.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Revealing Radiance, Nurturing Skin Health
        </h1>
        <p className={styles.description}>
          We are a team of dermatologists and skin care experts who are
          passionate about skin health and beauty
        </p>
        <button className={styles.button}> Find more</button>
      </div>
      <div className={styles.item}>
        <Image src={Doctors} alt='hero' className={styles.img} />
      </div>
    </div>
  );
}
