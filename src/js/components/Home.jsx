import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import User from "./User";


//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
		
			<h1 className="tittle">Tic Tac Toe in <strong>React.js </strong> </h1>
			
			
			<User/>
		
			
		</div>
	);
};

export default Home;