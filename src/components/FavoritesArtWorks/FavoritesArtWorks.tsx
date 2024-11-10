import React from "react";
import styles from "./FavoritesArtWorks.module.css";

export default function FavoritesArtWorks() {
  return (
    <div className={styles.FavoritesArtWorks}>
      <h4 className={styles.h4}>Saved by you</h4>
      <h3 className={styles.h3}>Your favorites list</h3>
    </div>
  );
}
