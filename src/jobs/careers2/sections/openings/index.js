import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./style.module.scss";
import bg_img from "./assets/bg_top.svg";
import { Link } from "react-router-dom";
function Index(props) {
  let openingCards = () => {
    return Object.keys(window.SITE_CONFIG.careers).map((key, i) => {
      let car = window.SITE_CONFIG.careers[key];
      return (
        <Col key={key} sm={12} md={4} lg={4}>
          <Link to={`/careers/${key}`}>
            <div className={styles.card}>
              <h3 className={styles.title}>TITLE</h3>
              <h6>Location</h6>
              <div className={styles.hover_card}>
                <h3 className={styles.title}>DOnt know</h3>
                <h6>Indore</h6>
              </div>
            </div>
          </Link>
        </Col>
      );
    });
  };
  return (
    <React.Fragment>
      <div className={`${styles.section} container`}>
        <Row className={styles.row}>{openingCards()}</Row>
      </div>
    </React.Fragment>
  );
}

export default Index;
