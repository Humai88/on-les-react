import styles from "./World.module.scss";
import teacher from "./../../assets/img/t5.png";
import data from "./../../data/data.json";
import { Row } from "react-bootstrap";
import { Preview } from "../Preview/Preview";

export const World = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <p>
          <span className={styles.header}>Сила природы велика (с)</span>
          <br />
          Мир, который нас окружает, полон тайн и удивительных процессов. Путь
          исследования ведёт к пониманию основ нашей среды. Этот раздел подарит
          вам полезные материалы по изучению окружающего мира и познавательные
          викторины.
        </p>
        <img className={styles.img} src={teacher} alt="teacher" />
      </div>

      <Row className={styles.previewWrapper}>
        {data.world.map((post, index) => {
          return (
            <Preview
              postUrl={`/world/${post.prevTitle}`}
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
