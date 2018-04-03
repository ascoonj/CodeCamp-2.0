import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";


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

    render () {
        return (
            <div>
             {this.state.sessions.map(session => (
                <div className="card" style={{width: 300}} key={session._id}>

                    <div className="img-container">
                        <img alt={session.speaker} src={session.photo} />
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{session.session_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{session.speaker}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{session.session_time}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{session.audience}</h6>
                        <p className="card-text">{session.short_descr}</p>
                    </div>
                    
                    <div className="card-body">
                        <a href="#" className="card-link">View Details</a>
                        <a href="#" className="card-link">Add to schedule</a>
                    </div>
                    
                </div>
            ))}
            </div>
        )
    }



}

export default SessionCard;
