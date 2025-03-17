type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Resposta do servidor: ${resposta}`);
  } else if (typeof resposta === "boolean") {
    console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
  }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);
