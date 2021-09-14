import styles from "./Main.module.scss";
import main from "./../../assets/img/main.png";
import key from "./../../assets/img/key1.png";
import attach from "./../../assets/img/ing.png";
import infinit from "./../../assets/img/inf1.png";
import { Feature } from "../Features/Feature";
import { CarouselComponent } from "../Carosel/Carosel";
import { Press } from "../PressSection/Press";
import firstImg from "./../../assets/img/lang pur.png";
import firstBtn from "./../../assets/img/pen btn.png";
import secondImg from "./../../assets/img/math pur.png";
import secondBtn from "./../../assets/img/math.png";
import thirdImg from "./../../assets/img/read pur.png";
import thirdBtn from "./../../assets/img/lang.png";
import fourthImg from "./../../assets/img/world pur.png";
import fourthBtn from "./../../assets/img/world.png";
import { Slide, Fade } from "react-awesome-reveal";

export const Main = () => {
  return (
    <>
      <div className={styles.wrapperAbout}>
        <div className={styles.contantAbout}>
          <h1>
            Сделаем наши уроки <br /> увлекательнее и ярче!
          </h1>
          <img src={main} alt="main" />
        </div>
      </div>
      <div className={styles.wrapperFeatures}>
        <div className={styles.contentFeatures}>
          <Fade direction={"up"}>
            <Feature
              imgSrc={key}
              header="Ключевые дисциплины"
              descr="Идеи для онлайн уроков по основным предметам начальной школы"
            />
            <Feature
              imgSrc={attach}
              header="Доступный материал"
              descr="Большой объем бесплатного материала для скачивания"
            />
            <Feature
              imgSrc={infinit}
              header="Постоянное обновление"
              descr="Регулярное добавление актуальных учебных ресурсов"
            />
          </Fade>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <CarouselComponent />
      </div>
      <div className={styles.pressWrapper}>
        <div className={styles.pressContant}>
          <Slide duration={1300} direction={"left"}>
            <Press imgSrc={firstImg} url="/language" btnSrc={firstBtn} />
            <Press imgSrc={secondImg} url="/math" btnSrc={secondBtn} />
          </Slide>
        </div>
        <div className={styles.pressContant}>
          <Slide duration={1600} direction={"right"}>
            <Press imgSrc={thirdImg} url="/reading" btnSrc={thirdBtn} />
            <Press imgSrc={fourthImg} url="/world" btnSrc={fourthBtn} />
          </Slide>
        </div>
      </div>
    </>
  );
};
