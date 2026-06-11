let vendas = [120, 200, 120, 350, 200, 500];
let semDuplicatas = [...new Set(vendas)];
let filtradas = semDuplicatas.filter(v => v > 150);
let total = filtradas.reduce((soma, v) => soma + v, 0);
let clone = [...vendas];

console.log("Original:", vendas);
console.log("Sem duplicatas:", semDuplicatas);
console.log("Filtradas (>150):", filtradas);
console.log("Total:", total);
console.log("Clone:", clone);
