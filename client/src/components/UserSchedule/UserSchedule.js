import React, { Component } from "react";
import API from "../../utils/API";
import UserScheduleItem from "../UserScheduleItem";
import "./style.css";


class UserSchedule extends Component {

	state = {
        schedule: [],
        userFirstName: ""
	};

	componentDidMount() {
        this.getLoggedInUser();
	};

	getLoggedInUser = () => {
		// console.log("User: ", this.props.auth);
		if(this.props.auth) {
        API.getOneUser(this.props.auth.userId)        
        	.then(res =>{
                console.log("first name: ",res.data.first_name)
                this.setState({schedule: res.data.schedule});
                this.setState({userFirstName: res.data.first_name});
				console.log("this.state.schedule: ", this.state.schedule)
				console.log("does sched exist?", this.testSched(this.state.schedule))
			})
			.catch(err => console.log(err));	
		} 
		else {
			// do nothing?
		}
	};
	
	testSched = (t) => {
		if (t === undefined) {
		   return true;
		}
		return false;
	  }
	
	  


render () {
	const blankSession = {
		title: "No session added yet"
	}

	const times = [
		"09:00",  "10:00", "11:00", "13:00", "14:00", "15:00", "16:00",
	]

	const scheduleExists = this.testSched(this.state.schedule);


	return(
		<div>
			<div className="list-group sched-title">
				<button href="#" className="button list-group-item list-group-item-action active">
					{this.state.userFirstName}'s Schedule
				</button>

				{times.map((sessionTime) => (
					<ul className="list-group session-list">

						
						{ scheduleExists
							? <UserScheduleItem auth={this.props.auth} session_time ={sessionTime} session_name={blankSession.title}/>
							: (this.state.schedule[sessionTime])
							? <UserScheduleItem auth={this.props.auth} session_time ={sessionTime} session_name={this.state.schedule[sessionTime].session_name} key={this.state.schedule[sessionTime]._id} />
							: <UserScheduleItem auth={this.props.auth} session_time ={sessionTime} session_name={blankSession.title}/>
					    }

            		</ul>
                 ))} 
				
			</div>
		</div>
	);
}}

export default UserSchedule;

 {/* {this.state.schedule["10:00"] ? 
                        <li> '10:00: {this.state.schedule["10:00"]}` </li> :
                        <li> '10:00: {blankSession.title}` </li> 
                    }       */}
                        
                        {/* <SideBarSession time="10:00" session={blankSession} /> */}

                        {/* <li className="list-group-item" >{this.state.schedule[sessionTime]}</li> */}
                        {/* console.log(this.state.schedule[sessionTime]); */}

                        // let scheduleArray = [];

                // Object.keys(res.data.schedule).forEach(function(key) {
                //   var obj = {};
                //   obj[key] = res.data.schedule[key];
                //   scheduleArray.push(obj); //push newly created object in `scheduleArray`array
                //   scheduleArray.sort();
                // });
                // console.log(scheduleArray); 
                // this.setState({schedule: scheduleArray});