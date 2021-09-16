import styles from "./Language.module.scss";
import teacher from "./../../assets/img/tlang.png";
import { Preview } from "../Preview/Preview";
import { Row } from "react-bootstrap";
import { DataType } from "../../App";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

type PropsType = {
  data: DataType;
};

export const Language: React.FC<PropsType> = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Язык</title>
        <meta
          name="description"
          content="Учебные материалы для уроков по русскому и английскому языкам."
        />
      </Helmet>
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

      <Row className={styles.previewWrapper}>
        {data?.language.map((post) => (
          <Preview
            postUrl={`/language/${post.prevTitle}`}
            key={post.id}
            title={post.prevTitle}
            imgSrc={post.prevImage}
          />
        ))}
      </Row>
    </div>
  );
};
