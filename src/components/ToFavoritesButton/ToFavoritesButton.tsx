import React, { useEffect, useState } from "react";
import { MdBookmarkBorder } from "react-icons/md";
import styles from "./ToFavoritesButton.module.css";

export default function ToFavoritesButton({
  id,
  imgUrl,
  title,
  artistTitle,
}: {
  id: number | string;
  imgUrl: string;
  title: string;
  artistTitle: string;
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${id}`)) {
      setIsActive(true);
    }
  }, [id]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

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

  return (
    <button
      onClick={handleClick}
      className={
        isActive ? styles.ToFavoriteButtonActive : styles.ToFavoriteButton
      }
    >
      <MdBookmarkBorder size={30} color="#F17900" />
    </button>
  );
}
