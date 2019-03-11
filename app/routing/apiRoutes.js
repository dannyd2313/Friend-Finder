
var friendData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {

        var userData = req.body;
        var closestFriendIndex = 0;
        var smallestDifference = 40;
    
        for (i = 0; i < friendData.length; i++) {
          var actualDifference = 0;
          for (x = 0; x < 10; x++) {
            var difference = Math.abs(userData.scores[x] - friendData[i].scores[x]);
            actualDifference += difference;
          }
    
          if (actualDifference < smallestDifference) {
            closestFriendIndex = i;
            smallestDifference = actualDifference;
          }
        };
    
        friendData.push(userData);
        res.json(friendData[closestFriendIndex]);
    });
    
    
};
