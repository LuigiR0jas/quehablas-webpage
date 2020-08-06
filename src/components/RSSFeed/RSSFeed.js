import React, { Component } from "react";

import "./styles/RSSFeed.css";

import EpisodeCard from "../EpisodeCard/EpisodeCard";

export default class RSSFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			items: "",
			episodesCards: "",
		};
	}

	fetchRSS = () => {
		const RSS_URL = "https://anchor.fm/s/261b0dc0/podcast/rss";

		fetch(RSS_URL)
			.then((response) => response.text())
			.then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
			.then((data) => {
				let items = Array.from(data.querySelectorAll("item"));
				let episodes = items.map((episode) => {
					let url = new URL(episode.querySelector("link").textContent);
					let pathname = url.pathname.split("/");
					pathname.splice(2, 0, "embed");

					return <EpisodeCard src={url.origin + pathname.join("/")}></EpisodeCard>;
				});
				this.setState({
					episodesCards: episodes,
					loading: false,
				});
			});
	};

	componentDidMount() {
		this.fetchRSS();
	}

	render() {
		return (
			<div className="container rss-feed">
				<div className="row justify-content-center">
					<div className="row justify-content-center">
						<div className="dock"></div>
					</div>
					<div className="row justify-content-center">
						<h1 className="title">Últimos Episodios</h1>
					</div>
					<div className="row justify-content-center">{this.state.loading ? "Loading" : this.state.episodesCards}</div>
				</div>
			</div>
		);
	}
}
