import React from "react";
import styles from "./Navbar.module.scss";
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <li className={styles["list-item"]}>Home</li>
        <li className={styles["list-item"]}>About</li>
        <li className={styles["list-item"]}>Shop</li>
        <li className={styles["list-item"]}>Partnership</li>
        <li className={styles["list-item"]}>Contact</li>
      </ul>
    </nav>
  );
};
