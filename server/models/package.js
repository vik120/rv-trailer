var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PackageSchema = new Schema({
    name: {type: String},
    listing: {type: Number},
    edit_listing: {type: Boolean},
    chat: {type: Boolean}
});

module.exports = mongoose.model('Package', PackageSchema);

