var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

app.use('/public', express.static('./public'));

var server = http.createServer(app);
server.listen(PORT);
console.log('Server listening on port ' + PORT);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});
