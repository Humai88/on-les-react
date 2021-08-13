import styles from "./Craft.module.scss";
import teacher from "./../../assets/img/t3.png";
import data from "./../../data/data.json";
import { Preview } from "../Preview/Preview";
import { Row } from "react-bootstrap";

export const Craft = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <img className={styles.img} src={teacher} alt="teacher" />

        <p>
          <span className={styles.header}>
            Творчество заразительно. Передай другому! (с)
          </span>
          <br />
          Мастерство создания – это непростой и в то же время невероятно
          увлекательный процесс. Развитие творческого потенциала – одна из
          главных задач современного педагога. Вашему вниманию представлены
          креативные идеи, которые могут быть использованы не только на уроке,
          но и на досуге.
        </p>
      </div>

      <Row className={styles.previewWrapper}>
        {data.craft.map((post, index) => {
          return (
            <Preview
              postUrl={`/craft/${post.prevTitle}`}
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
