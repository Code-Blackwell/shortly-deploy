var app = require('./server-config.js');
var http = require('http');

var port = process.env.PORT || 4568;

http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello from Azure running node version: ' + process.version + '</br>');
}).listen(port);

console.log('Server now listening on port ' + port);