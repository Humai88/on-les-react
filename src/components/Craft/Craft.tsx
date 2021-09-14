import styles from "./Craft.module.scss";
import teacher from "./../../assets/img/t9.png";
import { Preview } from "../Preview/Preview";
import { Row } from "react-bootstrap";
import { DataType } from "../../App";
import { Helmet } from "react-helmet";

type PropsType = {
  data: DataType;
};
export const Craft: React.FC<PropsType> = ({ data }) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Чтение</title>
        <meta
          name="description"
          content="Учебные материалы для уроков чтения."
        />
      </Helmet>
      <div className={styles.wrapper}>
        <img className={styles.img} src={teacher} alt="teacher" />

        <p>
          <span className={styles.header}>
            Книга - это мечта, которую вы держите в руках. (с)
          </span>
          <br />
          Мир книг открывает перед читателем безграничный мир новых знаний и
          незабываемых впечатлений. Помимо развития речи и обогащения словарного
          запаса, чтение дарит нам возможность за руку с автором пройти по тропе
          приключений и фантазий.
        </p>
      </div>

      <Row className={styles.previewWrapper}>
        {data.reading.map((post, index) => {
          return (
            <Preview
              postUrl={`/reading/${post.prevTitle}`}
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
