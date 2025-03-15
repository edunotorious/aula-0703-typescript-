class Repositorio<T> {
  private dadoNome: T[] = [];
  private dadoEmail: T[] = [];

  salvar(nome: T, email: T): void {
    this.dadoNome.push(nome);
    this.dadoEmail.push(email);
  }

  obterTodos(): T[] {
    return this.dadoNome, this.dadoEmail;
  }
}

const lista = new Repositorio();
lista.salvar("Eduardo", "eduardo@gmail.com");
console.log(lista.obterTodos());
