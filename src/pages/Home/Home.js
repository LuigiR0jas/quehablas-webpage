import React, { Component } from "react";

import RSSFeed from "../../components/RSSFeed/RSSFeed";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Hero></Hero>
				<RSSFeed></RSSFeed>
				<Footer></Footer>
			</React.Fragment>
		);
	}
}
