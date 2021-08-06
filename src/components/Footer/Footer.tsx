import React from "react";
import styles from "./Footer.module.scss";
import insta from "./../../assets/img/insta.png";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <img src={insta} alt="" />
      <span>©Copyright 2021 On-les</span>
    </div>
  );
};
