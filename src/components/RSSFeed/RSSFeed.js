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
		const RSS_URL = "https://anchor.fm/s/286b4c98/podcast/rss";

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
					episodesCards: this.sliceArrayInChunks(episodes, 3),
					loading: false,
				});
			});
	};

	sliceArrayInChunks = (array, subArraySize) => {
		// array is the array we will slice in chunks
		// subArraySize is the length each subarray will have
		console.log("yes");

		let slicedArray = [],
			auxiliaryArray = [];

		array.forEach((item, index, array) => {
			let realIndex = index + 1;

			if (Number.isInteger(realIndex / subArraySize) || realIndex == array.length) {
				auxiliaryArray.push(item);
				slicedArray.push(auxiliaryArray);
				auxiliaryArray = [];
			} else {
				auxiliaryArray.push(item);
			}
		});

		return slicedArray;
	};

	componentDidMount() {
		this.fetchRSS();
	}

	render() {
		return (
			<div className="container rss-feed">
				<div className="row justify-content-center">
					<div className="container">
						<div className="row justify-content-center">
							<div className="dock"></div>
						</div>
						<div className="row justify-content-center">
							<h1 className="title">Últimos Episodios</h1>
						</div>
						<div className="row justify-content-center">
							{this.state.loading ? (
								<div className="spinner-border text-danger"></div>
							) : (
								this.state.episodesCards[0]
							)}
						</div>
						<div className="row justify-content-center">
							<a
								href="https://www.youtube.com/channel/UCFMgYShpH1ldxj7_4Wl-OkQ/about?view_as=subscriber"
								className="btn rss-btn btn-lg">
								Más episodios
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
