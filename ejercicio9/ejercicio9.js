const http = require('http');
const urls = process.argv.slice(2);

function imprimir(url){
	
	http.get(url[0], function(response){
		
		let str = "";
		
		response.setEncoding("utf8");
		response.on("data", (res) => str += res);
		response.on("end", () => {
			console.log(str)
			let urlRestantes = url.slice(1);
			if(urlRestantes.length !== 0) imprimir(urlRestantes);
		});
	});
}

imprimir(urls);