var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    trailer_type: {type: Number},
    trailer_sub_type: {type: String},
    make: {type: String},
    model: {type: String, unique: true, lowercase: true },
    year: {type: String},
    length: {type: Boolean},
    gross_weight: {type: Boolean},
    tough_weight: {type: Boolean},
    guest: {type: Boolean, default: false},
    slide_out: {type: Boolean, default: false},
});

module.exports = mongoose.model('Product', ProductSchema);
