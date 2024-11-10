import React from "react";
import styles from "./ArtWorkCard.module.css";

interface Props {
  imgUrl: string;
  title: string;
  artistTitle: string;
}

export default function ArtWorkCard({ imgUrl, title, artistTitle }: Props) {
  return (
    <div className={styles.ArtWorkCard}>
      <img className={styles.img} src={imgUrl} alt={title} />
      <div className={styles.info}>
        <h2 className={styles.h2}>{title}</h2>
        <h3 className={styles.h3}>{artistTitle}</h3>
      </div>
    </div>
  );
}
