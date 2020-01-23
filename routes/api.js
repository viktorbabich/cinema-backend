var express = require('express');
var router = express.Router();

var film_controller = require('../controllers/filmController'); 
var session_controller = require('../controllers/sessionController'); 

router.get('/session_detail/:id', session_controller.session_detail);

router.post('/session_update', session_controller.session_update);

router.get('/films', film_controller.film_list);

router.get('/film_sessions/:id', session_controller.session_filtered_list);



module.exports = router;
