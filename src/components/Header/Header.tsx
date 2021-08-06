import React from "react";
import { Navbar } from "./Navbar";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};
