import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import API from "../../utils/API";
import SessionCard from "../SessionCard";
import './style.css';

//import otherComponent from '../otherComponent';

class SessionContainer extends Component {
	state = {
        sessions: []
    };

    componentDidMount() {
        this.loadSessions();
    };

    loadSessions = () => {
        API.getSessions()
        .then(res => this.setState({ sessions: res.data }))
        .catch(err => console.log(err));
    };

    // handleSubmit(event, id){
    //     event.preventDefault();
    //     console.log("handle submit clciked", this.props.auth.isAuthenticated)
    //     if(this.props.auth.isAuthenticated){

    //         API.addSessionToSchedule(id, this.props.auth.userId)
    //         .then((results)=>{ 
    //             console.log(results);
                      
    //         }).catch((err)=>{
    //             console.log(err);
    //         });
    //     }

    //         //axios call to add session to user schedule
    //     else {
    //         return <Redirect to="/signin" />
    //     }
    // }



	render(){
		return (
			<div>
				<div className="row row-eq-height align-items-start" style= {{backgroundColor: "rgb(247, 247, 249", paddingTop: "20px" }}>
					{this.state.sessions.map(session => (
						<SessionCard auth= {this.props.auth} session={session} key={session._id} />
					))}
				</div>
			</div>
		)
	}
}

export default SessionContainer;
