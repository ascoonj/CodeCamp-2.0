import React, { Component } from "react";
import API from "../../utils/API";
import UserScheduleItem from "../UserScheduleItem";
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

class UserSchedule extends Component {

	state = {
		schedule: {}
	};

	componentDidMount() {
        this.getLoggedInUser();
	};

	getLoggedInUser = () => {
        // console.log("User: ", this.props.auth);
        API.getOneUser(this.props.auth.userId)        
        	.then(res =>{
				// console.log("User Schedule: ",res.data.schedule)
				this.setState({schedule: res.data.schedule});
				console.log("schedule state: ", this.state.schedule)
			})
			.catch(err => console.log(err));	
	};
	
	
	// ericFunction = ()=>{
	// 	[...this.state.schedule].map((item)=>{

	// 	})
	// }
    
render () {
	const blankSession = {
		title: "No session added yet"
	}

	const times = [
		"09:00",  "10:00", "11:00", "13:00", "14:00", "15:00", "16:00",
	]

	// console.log("UserSchedule: ", this.props.auth);
	// console.log("render schedule: ", this.state.schedule);

	return(
		<div>
			<div className="list-group">
				<button href="#" className="button list-group-item list-group-item-action active">
					Logged in User's Schedule
				</button>
				<ul className="list-group">
                    <UserScheduleItem />
                </ul>
			</div>
		</div>
	);
}

}

export default UserSchedule;