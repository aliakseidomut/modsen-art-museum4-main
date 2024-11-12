import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useOutsideClick } from "@utils/hooks/useOutsideClick";
import styles from "./Header.module.css";
import { MdBookmarkBorder, MdOutlineHome } from "react-icons/md";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerButtonRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useOutsideClick(() => setIsMenuOpen(false), burgerButtonRef);

  const handleBurgerClick = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <NavLink to="/">
          <img
            className={styles.logo}
            src="https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/8a35c43bba1f5065c852af2b5d0fbd4925472ba6/src/assets/images/museum-logo.svg"
            alt="museum logo"
          />
        </NavLink>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.burgerNav : ""}`}
          ref={menuRef}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.hidden : styles.link
            }
            to="/"
          >
            <MdOutlineHome color="#F17900" />
            <span>Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.hidden : styles.link
            }
            to="/favorites"
          >
            <MdBookmarkBorder color="#F17900" />
            <span>Your favorites</span>
          </NavLink>
        </nav>

        <div
          ref={burgerButtonRef}
          className={`${styles.burgerButton} ${isMenuOpen ? styles.change : ""}`}
          onClick={handleBurgerClick}
        >
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
