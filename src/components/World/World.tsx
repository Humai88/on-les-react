import styles from "./World.module.scss";
import teacher from "./../../assets/img/tworld.png";
import { Row } from "react-bootstrap";
import { Preview } from "../Preview/Preview";
import { DataType } from "../../App";
import { Helmet } from "react-helmet";

type PropsType = {
  data: DataType;
};
export const World: React.FC<PropsType> = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Мир</title>
        <meta
          name="description"
          content="Учебные материалы для уроков ествествознания."
        />
      </Helmet>
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
