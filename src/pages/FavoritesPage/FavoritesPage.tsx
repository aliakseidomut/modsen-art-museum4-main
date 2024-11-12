import React from "react";
import { MdBookmarkBorder } from "react-icons/md";
import FavoritesArtWorks from "@components/FavoritesArtWorks/FavoritesArtWorks";
import styles from "./FavoritesPage.module.css";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";

export default function FavoritesPage() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
