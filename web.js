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
	response.render('nsremotelog.ejs')
});

app.post('/log', function(request, response) {
  response.send('Log received');
  console.log(request.body)
  	io.sockets.emit('log', request.body['log'])
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});