import React from "react";
import styles from "./Language.module.scss";
import teacher from "./../../assets/img/t7.png";
import { Preview } from "../Preview/Preview";
export const Language = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.img} src={teacher} alt="teacher" />
        <p>
          <span className={styles.header}>
            Язык – это путь цивилизации и культуры (с)
          </span>
          <br />
          Искусство речи позволяет в полной мере выражать свои мысли. Для
          овладения навыками языка необходим богатый словарный запас и знание
          грамматики. В данном разделе, помимо полезных учебных материалов к
          урокам, вы сможете найти увлекательные идеи для закрепления языковых
          навыков.
        </p>
      </div>
      <div className={styles.previewWrapper}>
        <Preview />
        <Preview />
        <Preview />
      </div>
    </div>
  );
};
