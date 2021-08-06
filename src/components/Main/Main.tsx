import React from "react";
import styles from "./Main.module.scss";
import main from "./../../assets/img/main.png";
import key from "./../../assets/img/key.png";
import attach from "./../../assets/img/attachment.png";
import infinit from "./../../assets/img/infinity.png";
import { Feature } from "../Features/Feature";
export const Main = () => {
  return (
    <>
      <div className={styles.wrapperAbout}>
        <div className={styles.contantAbout}>
          <h1>
            Сделаем наши уроки <br /> увлекательнее и ярче!
          </h1>
          <img src={main} alt="main" />
        </div>
      </div>
      <div className={styles.wrapperFeatures}>
        <div className={styles.contentFeatures}>
          <Feature
            imgSrc={key}
            header="Ключевые дисциплины"
            descr="Идеи для онлайн уроков по основным предметам начальной школы"
          />
          <Feature
            imgSrc={attach}
            header="Доступный материал"
            descr="Большой объем бесплатного материала для скачивания"
          />
          <Feature
            imgSrc={infinit}
            header="Постоянное обновление"
            descr="Регулярное добавление актуальных учебных ресурсов"
          />
        </div>
      </div>
    </>
  );
};
