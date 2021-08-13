import styles from "./Language.module.scss";
import teacher from "./../../assets/img/t7.png";
import { Preview } from "../Preview/Preview";
import { Row } from "react-bootstrap";
import data from "./../../data/data.json";

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

      <Row className={styles.previewWrapper}>
        {data.language.map((post) => (
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
