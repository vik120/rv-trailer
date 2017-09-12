var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListTrailer = new Schema({
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
    street: {type: String},
    city: {type: String },
    province: {type: String},
    postal: {type: Boolean},
    ad_title: {type: Boolean},
    ad_description: {type: Boolean},
    feature: {type: Boolean, default: false},
    province: {type: Boolean, default: false},
    no_of_beds: {type: Boolean},
    no_of_bathrooms: {type: Boolean},
    security_deposit: {type: Boolean},
    delivery_charges: {type: Boolean, default: false},
    high_rate_hour: {type: Boolean, default: false},
    high_rate_week: {type: Boolean},
    high_rate_month: {type: Boolean, default: false},
    low_rate_hour: {type: Boolean, default: false},
    low_rate_week: {type: Boolean},
    low_rate_month: {type: Boolean, default: false},
    highest_season_date_range_from: {type: Boolean, default: false},
    highest_season_date_range_to: {type: Boolean},
});

module.exports = mongoose.model('Product', ListTrailer);
