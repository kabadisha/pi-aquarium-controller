var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var piblaster = require('pi-blaster.js');

var app = express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var lightsPWMpin = 22;

// ------------------------------------------------------------------------
// configure Express to serve index.html and any other static files stored
// in the public directory
app.use(express.static('public'));

//lights on rest get call
app.get('/lightsOn', function(req, res) {
  piblaster.setPwm(lightsPWMpin, 1);
  res.end('Lights On');
});

//lights off rest get call
app.get('/lightsOff', function(req, res) {
  piblaster.setPwm(lightsPWMpin, 0);
  res.end('Lights Off');
});

//lights on rest get call
app.post('/setBrightness', function(req, res) {
  var brightness = req.body.brightness;
  piblaster.setPwm(lightsPWMpin, brightness);
  res.end('Brightness set to: ' + brightness);
});

// Express route for any other unrecognised incoming requests
app.get('*', function (req, res) {
  res.status(404).send('Unrecognised API call');
});

app.post('*', function (req, res) {
  res.status(404).send('Unrecognised API call');
});

// Express route to handle errors
app.use(function (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Oops, Something went wrong!');
  } else {
    next(err);
  }
});


//------------------------------------------------------------------------
//on clrl-c, put stuff here to execute before closing your server with ctrl-c
process.on('SIGINT', function() {
 var i;
 console.log("\nGracefully shutting down from SIGINT (Ctrl+C)");
 process.exit();
});

// ------------------------------------------------------------------------
// Release default pins bound by pi-blaster but we don't want to use
piblaster.release(4);
piblaster.release(17);
piblaster.release(18);
piblaster.release(27);
piblaster.release(21);
piblaster.release(23);
piblaster.release(24);
piblaster.release(25);

// Start Express App Server
//
app.listen(3000);
console.log('App Server is listening on port 3000');
