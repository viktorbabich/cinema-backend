var Session = require('../models/Session')

exports.session_detail = function(req, res, next) {
  Session.find({_id: req.params.id})
    .populate(["film", "hall"])
    .exec(function (err, detail_session) {
      if (err) { return next(err); }
      res.json({session_detail:  detail_session})
    })
};

exports.session_update = function(req, res, next) {
    console.log(req.body.id,  req.body.reserved)
    Session.update({_id: req.body.id}, {
        reservedSeats: req.body.reserved, 
    }, function(err, affected, resp) {
        console.log(resp);
    })
    res.json({result: "success"})
};

exports.session_list = function(req, res, next) {
  Session.find({})
    .populate(["film", "hall"])
    .exec(function (err, list_sessions) {
      if (err) { return next(err); }
      res.json({session_list:  list_sessions})
    })
};

exports.session_filtered_list = function(req, res, next) {
    Session.find({film: req.params.id})
        .populate(["film", "hall"])
        .exec(function (err, list_filtered_sessions) {
    if (err) { return next(err); }
        res.json({session_filtered_list:  list_filtered_sessions})
    })
};

