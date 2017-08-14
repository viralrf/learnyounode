const fs = require('fs');
const path = process.argv[2];

fs.readFile(path, function(err, data){
	if(!err){
		console.log( data.toString().split('\n').length - 1 );
	}
});