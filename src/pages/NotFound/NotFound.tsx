import React from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.NotFound}>
      <h2 className={styles.h2}>Error: Page not found</h2>
      <h3 className={styles.h2}>404</h3>
      <Link className={styles.Link} to="/">
        To home page
      </Link>
    </div>
  );
}
