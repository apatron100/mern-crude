var mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
});

var User = mongoose.mode;('User', userSchema)

module.exports = User