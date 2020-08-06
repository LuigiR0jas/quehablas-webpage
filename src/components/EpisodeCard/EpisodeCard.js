import React, { Component } from "react";

import "./styles/EpisodeCard.css";

export default class EpisodeCard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="row justify-content-center episode-card">
					<iframe src={this.props.src} height="161px" width="810px" frameBorder="0" scrolling="no"></iframe>
				</div>
			</React.Fragment>
		);
	}
}
