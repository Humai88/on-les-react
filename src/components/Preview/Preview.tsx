import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Preview.module.scss";

export const Preview = () => {
  return (
    <Col xs={12} md={6} lg={4} className={styles.col}>
      <Card border="0" className={styles.wrapper}>
        <Card.Img
          className={styles.img}
          variant="top"
          src="https://i.ibb.co/qFdTQDN/post1.jpg"
        />
        <Card.Body style={{ width: "100%" }}>
          <NavLink to="/">
            <h5 className={styles.header}>Игра "Выбери номер"</h5>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};
