var express = require('express');
var path = require('path');

// Sets up routing for server app
var router = express.Router();

router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname + '/../public/survey.html'))
})

router.use(function(req, res, next) {
	res.sendFile(path.join(__dirname + '/../public/home.html'))
});

module.exports = router;