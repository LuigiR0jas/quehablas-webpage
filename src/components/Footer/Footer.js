import React from "react";

import "./styles/Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="container fill">
				<div className="row">
					<div className="col align-self-center">
						<p className="footer-text">
							Desarrollado con 💖 por {"  "}
							<a href="https://github.com/LuigiR0jas/">@LuigiR0jas</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
