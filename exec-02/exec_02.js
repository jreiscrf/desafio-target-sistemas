let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
let num = parseInt(prompt("Digite o número que deseja verificar:"));
let i = 2;
let verificador = false;

while (!verificador) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  if (fibonacci[i] > num) {
    verificador = true;
  }
  i = i + 1;
}
console.log(fibonacci);

if (fibonacci.includes(num)) {
  alert("Esse número pertence a sequencia");
} else {
  alert("Esse número não pertence a sequencia");
}
