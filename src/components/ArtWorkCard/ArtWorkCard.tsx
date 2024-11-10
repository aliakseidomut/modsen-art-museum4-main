import React from "react";
import styles from "./ArtWorkCard.module.css";
import { NavLink } from "react-router-dom";

interface Props {
  id: number;
  imgUrl: string;
  title: string;
  artistTitle: string;
}

export default function ArtWorkCard({ id, imgUrl, title, artistTitle }: Props) {
  return (
    <NavLink className={styles.ArtWorkCard} to={`artworks/${id}`}>
      <img className={styles.img} src={imgUrl} alt={title} />
      <div className={styles.info}>
        <h2 className={styles.h2}>{title}</h2>
        <h3 className={styles.h3}>{artistTitle}</h3>
      </div>
    </NavLink>
  );
}
