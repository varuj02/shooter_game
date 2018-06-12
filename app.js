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