import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styles from "./style.module.scss";
import logo from "../../../../assets/img/logo_2.png";
import Navbar from "../../../../component/navbar";
function Index(props) {
	console.log(styles.bg);
	return (
		<React.Fragment>
			<div className={styles.bg}>
				<div className={styles.grid_bg} />
				<Row center={"xs"}>
					<Col className={styles.navbar} xs={12} md={11} lg={11} xl={10}>
						<div>
							<Navbar />
						</div>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	);
}

export default Index;
