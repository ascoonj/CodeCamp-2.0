import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import API from "../../utils/API";
import "./style.css";

import defaultPhoto from "./images/person.png";

// const SessionCard = (this.props) => {
class SessionCard extends Component {
//     state = {
//         sessions: []
//     };

//     componentDidMount() {
//         this.loadSessions();
//     };

//     loadSessions = () => {
//         API.getSessions()
//         .then(res => this.setState({ sessions: res.data }))
//         .catch(err => console.log(err));
//     };

    handleSubmit = (event, id) =>{
        event.preventDefault();
        console.log("handle submit clciked", this.props.auth.isAuthenticated)
        if(this.props.auth.isAuthenticated){

            API.addSessionToSchedule(id, this.props.auth.userId)
            .then((results)=>{ 
                console.log("results: ",results.data.updatedUser.schedule);
                      
            }).catch((err)=>{
                console.log(err);
            });
        }

            //axios call to add session to user schedule
        else {
            return <Redirect to="/signin" />
        }
    }


     render () {


        return (
            <div>
            {/* <div className="row row-eq-height align-items-start" style= {{backgroundColor: "rgb(247, 247, 249", paddingTop: "20px" }}>
                {this.state.sessions.map(session => (
                    // <SessionCard session={session} /> */}
                    <div className="col" >
                        <div className="card" style={{width: 240, height: 530}} >

                            <div className="img-container" style= {{backgroundColor: "rgb(195, 235, 229" }}>
                                <img alt="Testing" src={this.props.session.speaker_photo ? this.props.session.speaker_photo : defaultPhoto} style= {{width: 238, height: 240}} />
                            </div>
                                                   
                            <div className="card-body upper">
                                <h5 className="card-title">{this.props.session.session_name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.session.speaker}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.session.session_time}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{this.props.session.audience}</h6>
                                <p className="card-text">{this.props.session.short_descr}</p>
                            </div>
                            
                            <div className="card-body lower">
                                <button href="#" className="btn btn-info btn-sm btn-block">View Details</button>
                                <button onClick={(event)=> this.handleSubmit(event,this.props.session._id)} className="btn btn-info btn-sm btn-block">Add to schedule</button>
                            </div>

                        </div>
                    </div>
                {/* ))}
            </div> */}
            </div>
        )
    }



}

export default SessionCard;
