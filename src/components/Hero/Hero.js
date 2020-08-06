import React from "react";

import "./styles/Hero.css";

import logo from "../../assets/logo normal png.png";
import personajes from "../../assets/Banner(Twit,Fb,Link).png";

export default function Hero() {
	return (
		<div className="hero">
			<div class="container">
				<div className="row logo-container justify-content-center">
					<img className="logo-img" src={logo} />
				</div>
				<div className="row character-container justify-content-center">
					<img className="character-img" src={personajes} />
				</div>
			</div>
		</div>
	);
}
