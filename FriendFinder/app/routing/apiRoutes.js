var friends = require("../data/friends.js");


module.exports = function(app) {

//Route works in Postman but not on my survey page.

app.get("/api/friends", function(req, res) {
	res.json(friends);
	
});

app.post("/api/friends",function(req, res){
	
	var bestMatch = {
		name: "",
		photo: "",
		friendDifference: 1000
	};
	
	console.log(req.body);

	var userData = req.body;
	var userScores = userData.scores;

	console.log(userScores);

	var totalDifference = 0;

	for (var i = 0; i < friends.length; i ++) {
		console.log(friends[i]);
		totalDifference = 0;
		for (var a = 0; a < friends[i].score[a]; a++) {
			totalDifference = Math.abs(parseInt(userScores[a])-parseInt(friends[i].scores[a]));
		if (totalDifference <= bestMatch.friendDifference){

			bestMatch.name = friends[i].name;
			bestMatch.photo = friends[i].photo;
			bestMatch.friendDifference = totalDifference;
		}
		}
	}

	friends.push(userData);

	res.json(bestMatch);	
 })

};