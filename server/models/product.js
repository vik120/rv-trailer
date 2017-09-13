var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListTrailerSchema = new Schema({
    specification_trailer_type: {type: Number},
    specification_trailer_sub_type: {type: String},
    specification_trailer_sub_type: {type: String},
    specification_make: {type: String},
    specification_model: {type: String},
    specification_year: {type: String},
    specification_length: {type: String},
    specification_gross_weight: {type: String},
    specification_tough_weight: {type: String},
    specification_guest: {type: String},
    specification_slide_out: {type: String},
    location_street: {type: String},
    location_city: {type: String },
    location_province: {type: String},
    location_postal: {type: String},
    details_ad_title: {type: String},
    details_ad_description: {type: String},
    details_feature: {type: String},
    details_province: {type: String},
    details_no_of_beds: {type: String},
    details_no_of_bathrooms: {type: String},
    pricing_security_deposit: {type: String},
    pricing_delivery_charges: {type: String},
    pricing_high_rate_hour: {type: String},
    pricing_high_rate_week: {type: String},
    pricing_high_rate_month: {type: String},
    pricing_low_rate_hour: {type: String},
    pricing_low_rate_week: {type: String},
    pricing_low_rate_month: {type: String},
    pricing_highest_season_date_range_from: {type: String},
    pricing_highest_season_date_range_to: {type: String},
    photo: {type: String},
});

module.exports = mongoose.model('ListTrailer', ListTrailerSchema);
