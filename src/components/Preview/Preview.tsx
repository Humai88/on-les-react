import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Preview.module.scss";

export const Preview = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://i.ibb.co/qFdTQDN/post1.jpg"
        className={styles.img}
        alt="post"
      />
      <NavLink to="/">
        <h5 className={styles.header}>Игра "Выбери номер"</h5>
      </NavLink>
    </div>
  );
};
