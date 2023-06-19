"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";
import logo from "../../../public/logo.jpg";
import DarkModeToggle from "../DarkMode/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    url: "/nosotros",
  },
  {
    id: 3,
    title: "Pastores",
    url: "/pastores",
  },
  {
    id: 4,
    title: "Vivo",
    url: "/vivo",
  },
  {
    id: 5,
    title: "Contacto",
    url: "/contact",
  },
  {
    id: 6,
    title: "Donaciones",
    url: "/donaciones",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          height={50}
          width={60}
          className={styles.logo}
        />
      </Link>
      <span>SHEKINAH <br /> TEMPLO CENTRAL</span>
      </div>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
