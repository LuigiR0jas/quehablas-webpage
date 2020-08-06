import React from "react";

import "./styles/Hero.css";

import logo from "../../assets/logo normal png.png";
import personajes from "../../assets/Banner(Twit,Fb,Link).png";

export default function Hero() {
	return (
		<div className="hero">
			<div class="container">
				<div className="row justify-content-center">
					<img src={logo} alt="" height="400" width="400" />
				</div>
				<div className="row character-container justify-content-center">
					<img src={personajes} alt="" height="400" />
				</div>
			</div>
		</div>
	);
}
