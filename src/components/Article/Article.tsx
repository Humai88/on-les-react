import React, { useEffect } from "react";
import styles from "./Article.module.scss";
import { FaDownload } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { DataType } from "../../App";

type ArticleParams = {
  title: string;
};

export type ArticlePropsType = {
  page: "language" | "math" | "reading" | "world";
  data: DataType;
};

export const Article: React.FC<ArticlePropsType> = ({ page, data }) => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { title } = useParams<ArticleParams>();

  const currentPage = data[page];
  const article = currentPage.find((post) => post.prevTitle === title);

  if (!article && currentPage.length) {
    return <ErrorPage />;
  }
  if (!article) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={article.image} alt="" />
      <h3>{article.title}</h3>
      <p>{article.content}</p>
      <div className={styles.btnsWrapper}>
        <a href={article.link} target="_blank" rel="noreferrer">
          <button className={styles.download} type="button">
            <FaDownload className={styles.icon} />
            Скачать
          </button>
        </a>
        <button className={styles.close} onClick={() => history.goBack()}>
          <span>Вернуться назад</span>
        </button>
      </div>
    </div>
  );
};
