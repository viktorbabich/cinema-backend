var Film = require('../models/film');

// Display list of all films.
exports.film_list = function(req, res, next) {
  Film.find({}, 'name')
    .exec(function (err, list_films) {
      if (err) {return next(err)} 
      else {
            res.json({film_list:  list_films})
        }
    });

};

