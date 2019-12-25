import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./style.module.scss";
import bg_img from "./assets/bg_top.svg";

function Index(props) {
  let position = props.match.params.position;
  let positionDetail = window.SITE_CONFIG.careers[position];
  if (positionDetail === undefined) {
    props.history.push("/careers");
  }
  return (
    <React.Fragment>
      <div className={styles.bg_grid} />
      <div
        style={{
          position: "relative",
          background: "#171717",
          top: "-1px",
          zIndex: -1
        }}
      >
        <div className={`${styles.hero}`}>
          <div className="container">
            <Row>
              <Col xs={12}>
                <h3 className={styles.title}>{positionDetail.title}</h3>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={`container ${styles.pageContainer}`}>
        <Col xs={12} style={{ zIndex: 2 }}>
          <div className={styles.page}>
            <Description page={positionDetail.page} />
            <p
              style={{
                textAlign: "center",
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2rem 0rem calc(2rem - 20px) 0px",

                marginTop: "2rem"
              }}
            >
              If you’re interested, please reach out to us at&nbsp;
              <a
                style={{ color: "#006DE1", fontWeight: "400" }}
                href="mailto:hiring@towardsblockchain.com"
              >
                hiring@towardsblockchain.com
              </a>
            </p>
          </div>
        </Col>
      </div>
    </React.Fragment>
  );
}

function Description(props) {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: props.page }} />
    </React.Fragment>
  );
}

export default Index;
