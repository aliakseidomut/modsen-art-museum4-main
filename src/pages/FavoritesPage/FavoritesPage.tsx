import React from "react";
import styles from "./FavoritesPage.module.css";
import { MdBookmarkBorder } from "react-icons/md";
import FavoritesArtWorks from "../../components/FavoritesArtWorks/FavoritesArtWorks";

export default function FavoritesPage() {
  return (
    <div className={styles.FavoritesPage}>
      <h2 className={styles.h2}>
        Here Are Your
        <span style={{ color: "#F17900" }}>
          <MdBookmarkBorder size={55} color="#F17900" />
          Favorites
        </span>
      </h2>

      <FavoritesArtWorks />
    </div>
  );
}
