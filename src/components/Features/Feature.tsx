import React from "react";
import styles from "./Feature.module.scss";
type FeaturePropsType = {
  imgSrc: string;
  header: string;
  descr: string;
};
export const Feature: React.FC<FeaturePropsType> = (props) => {
  const { imgSrc, header, descr } = props;
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={imgSrc} alt="feature" />
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.descr}>{descr}</p>
    </div>
  );
};
