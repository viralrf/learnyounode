const fs = require('fs');
const path = process.argv[2];

let archivo = fs.readFileSync(path).toString().split('\n');

console.log(archivo.length - 1);