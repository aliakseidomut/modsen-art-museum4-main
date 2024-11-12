import React from "react";
import { MdBookmarkBorder } from "react-icons/md";
import FavoritesArtWorks from "@components/FavoritesArtWorks/FavoritesArtWorks";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  return (
    <div className={styles.FavoritesPage}>
      <h2 className={styles.h2}>
        Here Are Your
        <span style={{ color: "#F17900" }}>
          <MdBookmarkBorder
            className={styles.MdBookmarkBorder}
            color="#F17900"
          />
          Favorites
        </span>
      </h2>

      <FavoritesArtWorks />
    </div>
  );
}
