interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  motor?: string;
}

const meuCarro: Carro = {
  marca: "Volkswagen",
  modelo: "Polo",
  ano: 2020,
  motor: "200 TSI",
};

console.log(meuCarro);
