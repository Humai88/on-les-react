import { Carousel } from "react-bootstrap";
import boy from "./../../assets/img/boy.png";
import pupil from "./../../assets/img/boardboy.png";
import artist from "./../../assets/img/artist.png";
import styles from "./Carousel.module.scss";

export const CarouselComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Carousel>
        <Carousel.Item>
          <div className={styles.caption}>
            <h3>on-les</h3>
            <div className={styles.descr}>
              <p>
                Онлайн-сервис, созданный учителями для учителей. Поможем друг
                другу стать лучшими!
              </p>
            </div>
          </div>

          <img className="d-block w-100" src={pupil} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.caption}>
            <h3>4 раздела</h3>
            <div className={styles.descr}>
              <p>
                Здесь вы найдете много кретивных идей по разделам: Язык,
                Математика, Творчество и Мир.
              </p>
            </div>
          </div>

          <img className="d-block w-100" src={artist} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.caption}>
            <h3>Начальная школа</h3>
            <div className={styles.descr}>
              <p>
                Материалы, представленные на сайте, разработаны для учителей
                начальной школы.
              </p>
            </div>
          </div>

          <img className="d-block w-100" src={boy} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
