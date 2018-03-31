const models = require("../models");

// Defining methods for the booksController
module.exports = {
    findAllSessions: function(req, res) {
      models.Session
        .find(req.query)
        .sort({ date: -1 })
        .then(usersData => res.json(usersData))
        .catch(err => res.status(422).json(err));
    },
    findSessionById: function(req, res) {
      models.Session
        .findById(req.params.id)
        .then(userObj => res.json(userObj))
        .catch(err => res.status(422).json(err));
    },
    addNewSession: function(req, res) {
      models.Session
        .create(req.body)
        .then(newUserObj => res.json(newUserObj))
        .catch(err => res.status(422).json(err));
    },
    updateSession: function(req, res) { // should code to update session attendees via Twillio go here?
      models.Session
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }

    // updateSessionAttendees: function(req, res) {
    //     //twillio api code here?
    // },

    // countRegisteredUsers: function(req, res) {
    //     const sessionId = req.body._id; //get current session - unsure of correct syntax or approach here
    //     let regUserCount = 0;
    //     findAllUsers() //can users methods be accessed here?
    //         .then(function(usersObj){
    //             usersObj.forEach(user => {
    //                if (user.isAttending(sessionID)) {
    //                    regUserCount ++;
    //                }
    //             })
    //             res.send(regUserCount)
    //         })
    //         .catch(err => res.status(422).json(err));
  
    // }
  };