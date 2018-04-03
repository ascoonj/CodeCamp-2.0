import React from "react";
import Nav from "../Nav";
import Jumbotron from "../Jumbotron";
import SessionCard from "../SessionCard";

import "./style.css";

const Welcome = () =>{
	return (
		<div>
			<Nav />
			<Jumbotron>
              <h1>Code Camp 2.0</h1>
            </Jumbotron>
    		<SessionCard />
		</div>
	);
}

export default Welcome;