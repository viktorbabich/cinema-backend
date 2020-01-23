var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HallSchema = new Schema({
  name: String,
  seats: Number    
});

module.exports = mongoose.model('Hall', HallSchema);
