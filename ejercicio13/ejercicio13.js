const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer(function(req, res){
	
	const u = url.parse(req.url, true);
	const date = new Date(u.query.iso);
	let ob;

	if(u.pathname === '/api/parsetime'){		
		ob = JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		});
	}else{		
		ob = JSON.stringify({
			unixtime: date.getTime()
		});
	}
	
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(ob);
	
});

server.listen(port);