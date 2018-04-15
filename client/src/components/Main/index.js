import React from 'react';
import Nav from "../Nav";
import ScheduleSidebar from "../ScheduleSidebar";
import Jumbotron from "../Jumbotron";
import SessionContainer from "../SessionContainer";
import UserSchedule from "../UserSchedule";


import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Main = (props) => {
	return(
		<div>
			<Nav />
			{/* <ScheduleSidebar/> */}
			<Jumbotron>
				<h2 className="display-4">Orlando Codecamp 2018 | March 17th, 2018</h2>
				<p className="lead" style = {{color: "gray"}}>The 13th annual conference is hosted by the Orlando .NET User Group at Seminole State College, Sanford</p>
				<hr className="my-4"/>
				<p className="lead" style = {{color: "gray"}}> Learn how you can partipate as a <a  href="#" role="button">Speaker</a> or <a  href="#" role="button">Sponsor</a> </p>
				
            </Jumbotron>
    		<SessionContainer auth={props.auth}/>
			{props.auth.isAuthenticated && <UserSchedule auth={props.auth}/>}
		</div>
	);
}

export default Main;