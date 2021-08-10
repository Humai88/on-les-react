import React from "react";
import styles from "./MathPage.module.scss";
import teacher from "./../../assets/img/t9.png";
export const MathPage = () => {
  return (
    <div className={styles.wrapper}>
      <p>
        <span className={styles.header}>
          Математика – наука о бесконечном (с)
        </span>
        <br />
        Добро пожаловать в мир чисел, величин и форм! Здесь вы сможете найти не
        только полезные материалы для онлайн-уроков, но также новые идеи для
        дистанционных мероприятий.
      </p>
      <img className={styles.img} src={teacher} alt="teacher" />
    </div>
  );
};
