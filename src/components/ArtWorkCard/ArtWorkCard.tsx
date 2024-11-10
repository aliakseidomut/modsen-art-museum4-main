import React, { useState, useEffect } from "react";
import styles from "./ArtWorkCard.module.css";
import { NavLink } from "react-router-dom";
import { MdBookmarkBorder } from "react-icons/md";

interface Props {
  id: number;
  imgUrl: string;
  title: string;
  artistTitle: string;
}

export default function ArtWorkCard({ id, imgUrl, title, artistTitle }: Props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${id}`)) {
      setIsActive(true);
    }
  }, [id]);

  const toggleFavorite = () => {
    if (localStorage.getItem(`${id}`)) {
      localStorage.removeItem(`${id}`);
      setIsActive(false);
    } else {
      localStorage.setItem(
        `${id}`,
        JSON.stringify({ imgUrl, title, artistTitle }),
      );
      setIsActive(true);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite();
  };

  return (
    <NavLink className={styles.ArtWorkCard} to={`artworks/${id}`}>
      <img className={styles.img} src={imgUrl} alt={title} />
      <div className={styles.cardFooter}>
        <div className={styles.info}>
          <h2 className={styles.h2}>{title}</h2>
          <h3 className={styles.h3}>{artistTitle}</h3>
        </div>

        <button
          onClick={handleClick}
          className={
            isActive ? styles.favoriteButtonActive : styles.favoriteButton
          }
        >
          <MdBookmarkBorder size={30} color="#F17900" />
        </button>
      </div>
    </NavLink>
  );
}
