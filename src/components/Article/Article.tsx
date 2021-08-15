import React, { useEffect, useState } from "react";
import styles from "./Article.module.scss";
import { FaDownload } from "react-icons/fa";
import { useHistory, useParams } from "react-router-dom";
import data from "../../data/data.json";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { getData } from "../../api/api";
import { PostType } from "../Math/MathPage";

type ArticleParams = {
  title: string;
};

export type ArticlePropsType = {
  page: "language" | "math" | "craft" | "world";
};

export const Article: React.FC<ArticlePropsType> = ({ page }) => {
  let history = useHistory();
  // const [data, setData] = useState<PostType[]>([]);

  // useEffect(() => {
  //   getData(page).then((dataArray) => setData(dataArray));
  // }, []);

  const { title } = useParams<ArticleParams>();

  const currentPage = data[page];
  const article = currentPage.find((post) => post.prevTitle === title);
  if (!article) {
    return <ErrorPage />;
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
