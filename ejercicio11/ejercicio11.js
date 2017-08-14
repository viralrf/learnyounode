const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const dir = process.argv[3];

const server = http.createServer(function(req, res){
	fs.createReadStream(dir).pipe(res);
});

server.listen(port);