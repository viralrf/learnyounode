const http = require('http');
const port = process.argv[2];

const server = http.createServer(function(req, res){
	if( req.method === 'POST' ){
		
		let str = "";
		
		req.setEncoding("utf8");
		req.on("data", (x) => str += x );
		req.on("end", () => res.end(str.toUpperCase()));
	}
});

server.listen(port);