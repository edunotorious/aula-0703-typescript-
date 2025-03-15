function inverterArray<T>(array: T[]): T[] {
  return array.slice().reverse();
}

const numeros: number[] = [1, 2, 3, 4, 5];
const numerosInvertidos: number[] = inverterArray<number>(numeros);
console.log(numerosInvertidos);

const letras: string[] = ["a", "b", "c", "d", "f"];
const letrasInvertidas: string[] = inverterArray<string>(letras);
console.log(letrasInvertidas);
