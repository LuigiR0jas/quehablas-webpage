import React, { Component } from "react";

import "./styles/EpisodeCard.css";

export default class EpisodeCard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="embed-responsive embed-responsive-5by1">
					<iframe className="embed-responsive-item" src={this.props.src} frameBorder="0" scrolling="no"></iframe>
				</div>
			</React.Fragment>
		);
	}
}
