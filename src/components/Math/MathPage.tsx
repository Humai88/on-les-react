import styles from "./MathPage.module.scss";
import teacher from "./../../assets/img/tmath.png";
import { Row } from "react-bootstrap";
import { Preview } from "../Preview/Preview";
import { DataType } from "../../App";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

type PropsType = {
  data: DataType;
};

export const MathPage: React.FC<PropsType> = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Математика</title>
        <meta
          name="description"
          content="Учебные материалы для уроков математики."
        />
      </Helmet>
      <div className={styles.wrapper}>
        <p>
          <span className={styles.header}>
            Математика – наука о бесконечном (с)
          </span>
          <br />
          Добро пожаловать в мир чисел, величин и форм! Здесь вы сможете найти
          не только полезные материалы для онлайн-уроков, но также новые идеи
          для дистанционных мероприятий.
        </p>
        <img className={styles.img} src={teacher} alt="teacher" />
      </div>

      <Row className={styles.previewWrapper}>
        {data.math.map((post, index) => {
          return (
            <Preview
              postUrl={`/math/${post.prevTitle}`}
              key={index}
              title={post.prevTitle}
              imgSrc={post.prevImage}
            />
          );
        })}
      </Row>
    </div>
  );
};
