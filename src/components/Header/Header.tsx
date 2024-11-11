import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <NavLink to="/">
        <img
          className={styles.logo}
          src="https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/8a35c43bba1f5065c852af2b5d0fbd4925472ba6/src/assets/images/museum-logo.svg"
          alt="museum logo"
        />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.hidden : styles.link)}
          to="/"
        >
          <img
            src="https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/8a35c43bba1f5065c852af2b5d0fbd4925472ba6/src/assets/images/home.svg"
            alt="home icon"
          />
          <span>Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.hidden : styles.link)}
          to="/favorites"
        >
          <img
            src="https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/8a35c43bba1f5065c852af2b5d0fbd4925472ba6/src/assets/images/bookmark.svg"
            alt="favorites icon"
            height={23}
          />
          <span>Your favorites</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
