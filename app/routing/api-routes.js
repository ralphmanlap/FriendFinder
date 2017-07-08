var express = require('express');
var path = require('path');
var friendsObj = require('../data/friends.js');

// Routing for server
var router = express.Router();

router.post('/api/friends', function(req, res){
	req.body.length = 10;
	scoresArray = Array.prototype.slice.call(req.body);
	scoresArray.forEach(function(e,i,a){
		a[i] = Number(e);
	})
	var newFriend = {
		name: req.body.name,
		photo: req.body.photo,
		email: req.body.email,
		scores: scoresArray
	}

	var matchInfo = friendsObj.bestMatchFinder(scoresArray);

	friendsObject.addFriend(newFriend);
});

router.get('/api/friends', function(req, res){
	res.json(friendsObject.friends);
});
module.exports = router;