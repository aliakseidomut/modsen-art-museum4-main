import React from "react";
import styles from "./ArtWorkCardMini.module.css";
import { NavLink } from "react-router-dom";
import ToFavoritesButton from "../ToFavoritesButton/ToFavoritesButton";

interface Props {
  id: number;
  imgUrl: string;
  title: string;
  artistTitle: string;
}

export default function ArtWorkCardMini({
  id,
  imgUrl,
  title,
  artistTitle,
}: Props) {
  return (
    <NavLink className={styles.ArtWorkCardMini} to={`/artworks/${id}`}>
      <div className={styles.data}>
        <img className={styles.img} src={imgUrl} alt={title} />
        <div className={styles.info}>
          <h2 className={styles.h2}>{title}</h2>
          <h3 className={styles.h3}>{artistTitle}</h3>
        </div>
      </div>
      <ToFavoritesButton id={id} />
    </NavLink>
  );
}
