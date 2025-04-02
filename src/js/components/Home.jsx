import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import User from "./User";


//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
		
			<h1 className="text-center mt-5">Tic Tac Toe in React.js </h1>
			<h2 className="text-center mt-5">Pick a weapon </h2>
			
			<User/>
		
			
		</div>
	);
};

export default Home;