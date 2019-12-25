import React, { Component } from "react";
import Header from "./sections/header/";
import Hero from "./sections/hero/";
import Openings from "./sections/openings/";
import { Helmet } from "react-helmet";
import Footer from "../../component/footer/";
class Index extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet
					title="Find Latest Job Opportunities -Towards Blockchain "
					meta={[
						{
							name: "description",
							content:
								"Interested in Emerging Technology? You will fit right in. Come join us and let’s transform the world together. Send us your portfolio and we'll get back to you"
						},
						{
							property: "og:url",
							content: "https://towardsblockchain.com/careers"
						}
					]}
				/>

				{/* <Header /> */}
				<Hero />
				<Openings />
				{/* <Footer /> */}
			</React.Fragment>
		);
	}
}

export default Index;
