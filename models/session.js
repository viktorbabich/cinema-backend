var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var Film = require('../models/film')
var Hall = require('../models/hall')

var SessionSchema = new Schema({
    film: { type: Schema.ObjectId, ref: 'Film', required: true },
    hall: { type: Schema.ObjectId, ref: 'Hall', required: true },
    sessionDate: { type: Date, required: true },
    reservedSeats: [{type: Number}],
    price: {type: Number}
});


SessionSchema
.virtual('session_date')
.get(function () {
  return moment(this.sessionDate).format('YYYY-MM-DD');
});

SessionSchema
.virtual('session_time')
.get(function () {
  return moment(this.sessionDate).format('HH:mm:ss');
});


module.exports = mongoose.model('Session', SessionSchema);
