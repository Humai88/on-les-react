import styles from "./MathPage.module.scss";
import teacher from "./../../assets/img/t9.png";
import { Row } from "react-bootstrap";
import { Preview } from "../Preview/Preview";
import { useEffect, useState } from "react";
import { getData } from "../../api/api";

export type PostType = {
  id: string;
  image: string;
  title: string;
  content: string;
  link: string;
  prevImage: string;
  prevTitle: string;
};

export const MathPage = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    getData("math").then((dataArray) => setData(dataArray));
  }, []);

  return (
    <div>
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
        {data.map((post, index) => {
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
