"use client";
import React from "react";
import styles from "./player.module.css";

const Player = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>Radio Shekinah En Vivo</h2>
        <iframe
          src="https://iglesiastc.com/"
          title="Reproductor de radio"
          width="60%"
          height="140px"
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div>
        <h2>Martes de intercesion- 13 Jun. 2023 | Reproducción 2023</h2>
        <iframe
          className="youtube"
          width="480"
          height="315"
          src="https://www.youtube.com/embed/LIwQyTFEwig"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
