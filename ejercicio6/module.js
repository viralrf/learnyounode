const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback){
	
	let lista = [];
	
	fs.readdir(dir, function(err, l){
		
		if(err) return callback(err);
		
		l.map( x => {
			if( path.extname(x) === "." + ext) lista.push(x);
		});
				
		callback(null, lista);
	});	
};