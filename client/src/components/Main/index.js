import React from 'react';
import Nav from "../Nav";
import Jumbotron from "../Jumbotron";
import SessionCard from "../SessionCard";

import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Main = (props) => {
	return(
		<div>
			<Nav />
			<Jumbotron>
              <h1 className="display-4">Orlando Codecamp 2018</h1>
            </Jumbotron>
    		<SessionCard auth={props.auth}/>
		</div>
	);
}

export default Main;