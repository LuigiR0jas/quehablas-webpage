import React, { Component } from "react";

import RSSFeed from "../../components/RSSFeed/RSSFeed";
import Hero from "../../components/Hero/Hero";

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Hero></Hero>
				<RSSFeed></RSSFeed>
			</React.Fragment>
		);
	}
}
