import React from "react";
import { Jumbotron } from "./jumbotron.jsx";
import { Navbar } from "./navbar.jsx";
import { Card } from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
		</div>
	);
};

export default Home;
