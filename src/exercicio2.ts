interface Multiplicacao {
  (num1: number, num2: number): number;
}

const primeiraMultiplicacao: Multiplicacao = (x, y) => x * y;

console.log(
  "Resultado da primeira multiplicacao: ",
  primeiraMultiplicacao(2, 5)
);

console.log(
  "Resultado da segunda multiplicacao: ",
  primeiraMultiplicacao(6, 6)
);

console.log(
  "Resultado da segunda multiplicacao: ",
  primeiraMultiplicacao(3, 4)
);
