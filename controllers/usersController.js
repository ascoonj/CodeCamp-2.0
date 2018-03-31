const models = require("../models");

// Defining methods for the booksController
module.exports = {
    findAllUsers: function(req, res) {
      models.User
        .find(req.query)
        .sort({ date: -1 })
        .then(usersData => res.json(usersData))
        .catch(err => res.status(422).json(err));
    },
    findUserById: function(req, res) {
      models.User
        .findById(req.params.id)
        .populate("session")
        .then(userObj => res.json(userObj))
        .catch(err => res.status(422).json(err));
    },
    addNewUser: function(req, res) {
      models.User
        .create(req.body)
        .then(newUserObj => res.json(newUserObj))
        .catch(err => res.status(422).json(err));
    },
    updateUser: function(req, res) {
      models.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // updateUserSchedule: function (req, res) {
        //user clicks a session to add it to schedule
        //clicked session id = req.body._id
        //clicked sessionTime? req.body.session_time ?
        // logged in user's id = req.user._id
        //e.g: if (user.schedule.[sessionTime])
        
    // }
  };
