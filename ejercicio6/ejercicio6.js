const m = require('./module');

const path = process.argv[2];
const ext = process.argv[3];

m(path, ext, function(err, list){
	
	if(err) return console.error("Error ", err);
	
	list.map( x => console.log(x) );
	
});
