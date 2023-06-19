import Image from "next/image";
import styles from "./page.module.css";
import hero from "../../public/apostol.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <h1 className={styles.title}>IGLESIA SHEKINAH TC</h1>
        <p className={styles.desc}>
          Iglesia Cristiana SHEKINAH Templo Central, Donde se respira una atmósfera de Gloria.
        </p>
        <div className={styles.btnContainer}>
        <Button url="/nosotros" text="Conocenos" />
        <Button url="/vivo" text="En Vivo" />
        </div>
      </div>
      <div className={styles.items}>
        <Image className={styles.img} src={hero} alt="Hero Image" />
      </div>
    </div>
  );
}
