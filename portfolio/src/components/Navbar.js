import React from "react";
import NavButtons from "./NavButtons";

function Navbar() {
	return (
		<nav>
			<span className="nav-logo">Nirvik</span>
			<span className="nav-section">
				<NavButtons buttonName="Home" />
				<NavButtons buttonName="About Me" />
				<NavButtons buttonName="Contact" />
			</span>
		</nav>
	);
}

export default Navbar;
