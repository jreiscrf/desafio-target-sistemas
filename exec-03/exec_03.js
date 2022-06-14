const data = require("./data.json");

const valorTotal = data.map((item) => item.valor);
const valorSemZero = valorTotal.filter((item) => item > 0);

let min = Math.min(...valorSemZero);
let max = Math.max(...valorTotal);

let soma = valorSemZero.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

const valoresMaioresQueMedia = valorSemZero.filter(
  (item) => item > soma / valorSemZero.length
);

let menorFaturamento = data[valorTotal.indexOf(min)];
let maiorFaturamento = data[valorTotal.indexOf(max)];

console.log(
  "Menor faturamento do mês: Dia",
  menorFaturamento.dia,
  "no valor de: R$",
  menorFaturamento.valor.toFixed(2)
);

console.log(
  console.log(
    "Maior faturamento do mês: Dia",
    maiorFaturamento.dia,
    "no valor de: R$",
    maiorFaturamento.valor.toFixed(2)
  )
);

console.log(
  "Dias que o faturamento foi maior que a média mensal: ",
  valoresMaioresQueMedia.length
);
