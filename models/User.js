const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	reg_type: {type: String, required: true},
	email: {type: String, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
	schedule: { 
		"09:00": {type: Schema.Types.ObjectId, ref: "Session"},
		"10:00": {type: Schema.Types.ObjectId, ref: "Session"},
		"11:00": {type: Schema.Types.ObjectId, ref: "Session"},
		"13:00": {type: Schema.Types.ObjectId, ref: "Session"},
		"14:00": {type: Schema.Types.ObjectId, ref: "Session"},
		"15:00": {type: Schema.Types.ObjectId, ref: "Session"},
		"16:00": {type: Schema.Types.ObjectId, ref: "Session"}
	},
	heardAboutEvent: {type: String},
	phone: {
        type: String,
        validate: {
          isAsync: true,
          validator: function(entry, cb) {
            setTimeout(function() {
              var phoneRegex = /\d{3}-\d{3}-\d{4}/;
              var msg = entry + ' is not a valid phone number!';
              // First argument is a boolean, whether validator succeeded
              // 2nd argument is an optional error message override
              cb(phoneRegex.test(entry), msg);
            }, 5);
          },
          // Default error message, overridden by 2nd argument to `cb()` above
          message: 'Default error message'
		}
	}
});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like

User.methods.isAttending = function (sessionID) {
	for (var key in User.schedule) {
		if (User.schedule.key = sessionID) {
			return true;
		}
	}
	return false;
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);