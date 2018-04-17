import React from 'react';
import "./style.css";
import UserSchedule from '../UserSchedule';

// gather other componets
//import otherComponent from "../otherComponent";

const SidebarContent = (props) => {
	return(
		<div>
			{/* {props.auth.isAuthenticated && <UserSchedule auth={props.auth}/>} */}
			<UserSchedule auth={props.auth}/>

		</div>
	);
}

export default SidebarContent;