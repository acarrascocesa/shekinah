"use client"
import React from "react";
import Player from "@/components/Player/Player";
import styles from "./page.module.css"

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1>SHEKINAH EN VIVO</h1>
      <br />
      <Player />
    </div>
  );
};

export default Portfolio;
