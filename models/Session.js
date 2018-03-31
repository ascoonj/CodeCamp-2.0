const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Session = new Schema({
	session_name: {type: String, required: true},
    session_time: {type: String, required: true},
    location: {type: String, required: true},
    descr: {type: String, required: true},
    speaker: {type: String, required: true},
    track: {type: String, required: true},
    audience: {type: String, required: true},
    photo: {type: String},
    presentation: {type: String},
    isActive: {type: Boolean}
    //registered_users: [{type: Schema.Types.ObjectId, ref: "User"}]

});
//passport-local-mongoose creates a 'username' and some password fields for you
//you can add some other fields here too if you like



module.exports = mongoose.model('Session', Session);