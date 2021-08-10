import React from "react";
import styles from "./Footer.module.scss";
import insta from "./../../assets/img/insta.png";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://www.instagram.com/on__les/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={insta} alt="insta" />
      </a>
      <span>©Copyright 2021 On-les</span>
    </div>
  );
};
