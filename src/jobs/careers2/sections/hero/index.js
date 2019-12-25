import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./style.module.scss";
import bg_img from "./assets/bg_top.svg";

function Index(props) {
  return (
    <React.Fragment>
      <div className={styles.bg_grid} />
      <div style={{ position: "relative", background: "#171717", top: "-1px" }}>
        <div className={`${styles.hero}`}>
          <div className="container">
            <Row>
              <div>
                <h3 className={styles.title}>Research Internships </h3>
                {/* <h5 className={styles.subTitle}>Love what we do?</h5> */}
                <h5 className={styles.desc}>
                  Get a ressearch internhip under a highly qyalified proffesor and get you carreres to a new height
                </h5>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Index;
