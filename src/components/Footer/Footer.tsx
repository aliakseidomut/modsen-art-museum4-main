import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <NavLink to="/">
          <img
            src="https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/38fe80f7bba17ff5650b359809c8ad9ffe892b40/src/assets/images/museum-logo-2.svg"
            alt="museum logo"
          />
        </NavLink>
      </div>
    </footer>
  );
}
