import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 IGLESIA CRISTIANA SHEKINAH. All rights reserved.</div>
      <div className={styles.social}>
        <Link href={"https://www.instagram.com/shekinahtc/"} target="_blank"><Image className={styles.icon} src="/2.png" width={15} height={15} alt="AC DEV INSTAGRAM" /></Link>
        <Link href={"https://www.youtube.com/@concilioshekinah/streams"} target="_blank"><Image className={styles.icon} src="/4.png" width={15} height={15} alt="AC DEV INSTAGRAM" /></Link>
      </div>
    </div>
  );
};

export default Footer;
