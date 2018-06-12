// var express = require('express');
// var path = require('path');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);

// // Define the port to run on
// app.set('port', process.env.PORT || 3000);

// app.use(express.static(path.join(__dirname, 'public')));

// // Listen for requests
// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('Magic happens on port ' + port);
//  });



var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, function () {
    console.log("Server is listening on port " + port);
});


var side = 32;
var width = 25, height = 15;


var Players = [
  { x: 2 * side, y: 0,color:"red" },
  { x: 2 * side, y: (height - 1) * side,color:"blue"},
  { x: (width - 3) * side, y: 0, color: "green" },
  { x: (width - 3) * side, y: (height - 1) * side, color: "yellow" }
];
var playerCounter = 0;


io.on('connection', function (socket) {
console.log('player connected')
socket.emit("player data",Players[playerCounter++])


})