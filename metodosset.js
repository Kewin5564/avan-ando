let numeros = [10, 20, 30, 20, 40, 10, 50];

let conjunto = new Set(numeros);

console.log("Original:", numeros);
console.log("Set:", conjunto);

conjunto.add(60);
conjunto.delete(10);

console.log("Tem 30?", conjunto.has(30));

let convertido = [...conjunto];
console.log("Array convertido:", convertido);
