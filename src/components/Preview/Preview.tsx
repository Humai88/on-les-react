import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Preview.module.scss";

type PreviewCardPropsType = {
  imgSrc: string;
  title: string;
  postUrl: string;
};
export const Preview: React.FC<PreviewCardPropsType> = (props) => {
  const { imgSrc, title, postUrl } = props;

  return (
    <Col xs={12} md={12} lg={6} xl={4} className={styles.col}>
      <Card border="0" className={styles.wrapper}>
        <Link to={postUrl}>
          <Card.Img className={styles.img} variant="top" src={imgSrc} />
        </Link>
        <Card.Body style={{ width: "100%" }}>
          <Link to={postUrl}>
            <h5 className={styles.header}>{title}</h5>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
