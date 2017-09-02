var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    type: {type: Number},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, unique: true, lowercase: true },
    password: {type: String},
    newsletter_owner: {type: Boolean},
    newsletter_renter: {type: Boolean},
    approved: {type: Boolean},
    admin: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', UserSchema);

