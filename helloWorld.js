var http = require('http');
var serverName = process.env.SERVER_NAME || 'default';
var port = process.env.PORT || 8000;

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(`Hello World from server ${serverName}\n`);
});

server.listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);
