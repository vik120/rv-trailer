var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavouriteSchema = new Schema({
    user_id: {type: String},
    trailer_id: {type: String},
});

module.exports = mongoose.model('Favourite', FavouriteSchema);

