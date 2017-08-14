const numeros = process.argv.slice(2);

const resultado = numeros.reduce((init, num) => init + Number(num), 0);

console.log(resultado);