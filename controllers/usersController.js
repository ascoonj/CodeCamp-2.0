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
        .populate("schedule.09:00")
        .populate("schedule.10:00")
        .populate("schedule.11:00")
        .populate("schedule.13:00")
        .populate("schedule.14:00")
        .populate("schedule.15:00")
        .populate("schedule.16:00")
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
    },
    updateUserSchedule: function (req, res) {
      // console.log(req.params);

      // console.log("user: ", req);
        // user clicks a session to add it to schedule
        // clicked session id = req.body._id
        // clicked sessionTime? req.body.session_time ?
        // logged in user's id = req.user._id
        // e.g: if (user.schedule.[sessionTime])
        models.Session.findById(req.params.id)
          .then( (clickedSession) => {
            console.log("click session:", clickedSession)
            const sessionTime = clickedSession.session_time;
            const fieldName = `schedule.${sessionTime}`;

            console.log("fieldBName:", fieldName);

            console.log(req.body.userId)
            return models.User
            .findByIdAndUpdate(req.body.userId,{
              $set:{
                [fieldName] :req.params.id
              }
            },{new: true})
            .populate("schedule.09:00")
            .populate("schedule.10:00")
            .populate("schedule.11:00")
            .populate("schedule.13:00")
            .populate("schedule.14:00")
            .populate("schedule.15:00")
            .populate("schedule.16:00");
          })
          .then ( (updatedUser) => {
            res.json({
              updatedUser,
              message: "Schedule updated"
            })
          })
          .catch( (err) => {
            res.json({
              message: err.message
            })
          })
     
        
    }
  };
