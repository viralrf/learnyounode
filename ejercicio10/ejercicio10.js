const net = require('net');
const port = process.argv[2];

function agregarCero(f){
	
	if( f < 10 ) f = "0" + f;
	return "" + f;	
	
}

const server = net.createServer(function(socket){
	
	const date = new Date();
	
	let str = "";
	str += date.getFullYear() + "-";
	str += agregarCero( date.getMonth() + 1) + "-";
	str += agregarCero( date.getDate() ) + " ";
	str += agregarCero( date.getHours() ) + ":";
	str += agregarCero( date.getMinutes() ) + "\n";
	
	socket.end(str);
});

server.listen(port);