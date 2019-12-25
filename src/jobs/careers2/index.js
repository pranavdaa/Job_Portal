import React, { Component } from "react";
//import Header from "./sections/header/";
import Hero from "./sections/hero/";
import Openings from "./sections/openings/";
import { Helmet } from "react-helmet";
//import Footer from "../../component/footer/";
class Index extends Component {
	render() {
		return (
			<React.Fragment>
				<Helmet
					title="Find a Research Internship Opportunity "
					meta={[
						{
							name: "description",
							content:
								"Interested in Emerging Technology? You will fit right in.Apply Via TechBootCamps Internal Portal and have a higher chance of selecgtion in these Internships "
						},
						{
							property: "og:url",
							content: "http://techbootcamps.co.in/"
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
