import styles from "./Press.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";
type PressType = {
  imgSrc: string;
  btnSrc: string;
  url: string;
};

export const Press: React.FC<PressType> = ({ imgSrc, btnSrc, url }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img className={styles.img} src={imgSrc} alt="" />
        <NavLink to={url}>
          <img className={styles.btn} src={btnSrc} alt="" />
        </NavLink>
      </div>
    </div>
  );
};
