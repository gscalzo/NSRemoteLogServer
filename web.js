var express = require('express');
var app = express.createServer(express.logger());

var socket = require('socket.io')
var io = socket.listen(app)
var connectedClient;

io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 1); 
  io.set("log level", 1); 
});

app.use(express.bodyParser());

app.get('/', function(request, response) {
	response.render('weathermap.ejs', {lat:12, long:13})
});

app.post('/measure', function(request, response) {
  response.send('You are doomed');
  console.log(request.body)
//  	io.sockets.emit('measure', request.body.lat, request.body.long)
  	io.sockets.emit('measure', request.body)
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});