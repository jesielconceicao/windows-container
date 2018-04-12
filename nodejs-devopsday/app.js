var http = require('http');  
var port = 80;

function handleRequest(req, res) {  
  res.end('DevOps Day, Docker and Windows Container');
}

var server = http.createServer(handleRequest);

server.listen(port);