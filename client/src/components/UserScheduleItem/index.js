import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const UserScheduleItem = (props) => {
	return(
		<div>
			<li className="list-group-item">`{props.time}: {props.title}`</li>
		</div>
	);
}

export default UserScheduleItem;