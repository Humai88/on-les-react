import React from "react";
import { Navbar } from "./Navbar";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.logo} to="/">
        on-les
      </NavLink>
      <Navbar />
    </div>
  );
};
