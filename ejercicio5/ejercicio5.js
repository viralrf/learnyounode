const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, function(err, list){
	
	if(!err){
		list.map( x => {
			if( path.extname(x) === "." + ext){
				console.log(x);
			}
		});
	}
});