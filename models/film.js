var mongoose = require('mongoose');
var moment = require('moment'); // For date handling.

var Schema = mongoose.Schema;

var FilmSchema = new Schema({
  name: { type: String, required: true },
  duration: { type: Number }
});

FilmSchema
.virtual('url')
.get(function () {
  return '/catalog/film_sessions/'+this._id;
});

module.exports = mongoose.model('Film', FilmSchema);
