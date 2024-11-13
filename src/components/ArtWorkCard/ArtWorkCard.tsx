import React from "react";
import { NavLink } from "react-router-dom";
import ToFavoritesButton from "../../components/ToFavoritesButton/ToFavoritesButton";
import styles from "./ArtWorkCard.module.css";

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
      <div className={styles.cardFooter}>
        <div className={styles.info}>
          <h2 className={styles.h2}>{title}</h2>
          <h3 className={styles.h3}>{artistTitle}</h3>
        </div>
        <ToFavoritesButton id={id} />
      </div>
    </NavLink>
  );
}
