import React, { Component } from "react";
import {Route, Redirect} from 'react-router-dom';
import API from "../../utils/API";
import "./style.css";
import defaultPhoto from "./images/person.png";


class SessionCard extends Component {
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

    handleSubmit(event,id){
        event.preventDefault();
        if(this.props.auth.isAuthenticated){
            //axios call to add session to user schedule
        } else{
            return 
                <Redirect to="/signin" />
        }
    }


    render () {


        return (
            <div>
            <div className="row row-eq-height align-items-start">
                {this.state.sessions.map(session => (
                    // <SessionCard session={session} />
                    <div className="col">
                        <div className="card" style={{width: 260}} key={session._id}>

                            <div className="img-container">
                                <img alt="Testing" src={session.speaker_photo ? session.speaker_photo : defaultPhoto} style= {{width: 258, height: 260}} />
                            </div>
                            <hr/>                            
                            <div className="card-body">
                                <h5 className="card-title">{session.session_name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{session.speaker}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{session.session_time}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">{session.audience}</h6>
                                <p className="card-text">{session.short_descr}</p>
                            </div>
                            
                            <div className="card-body">
                                <a href="#" className="card-link">View Details</a>
                                <button onClick={(event)=> this.handleSubmit(event,session._id)} className="card-link">Add to schedule</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    }



}

export default SessionCard;
