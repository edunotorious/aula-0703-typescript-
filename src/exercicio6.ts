type Estudante = {
  nome: string;
  curso: string;
};

type Trabalhador = {
  empresa: string;
  cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
  nome: "Eduardo Gomes",
  curso: "Software Engineer",
  empresa: "Orleanstur",
  cargo: "Gerente",
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);
