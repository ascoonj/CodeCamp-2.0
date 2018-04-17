import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const UserScheduleItem = (props) => {
	return(
		<div>
            <li className="list-group-item">
               <span> <p><em>{props.session_time}:</em> {props.session_name} </p>
				
					{/* <button className="btn btn-outline-info btn-sm my-2 my-sm-0" >View Details</button> */}
				
				</span>
            </li>
		</div>
	);
}

export default UserScheduleItem;