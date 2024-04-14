// Exercício 1
console.log("Exercício 1");
try {
  let x = lucas;
} catch (erro) {
  console.error("Variável não definida.", erro);
}
console.log("-----------------");
console.log("Exercício 2");
function tratarErroFuncaoInexistente() {
  try {
    funcaoInexistente();
  } catch (erro) {
    console.error("Função não definida:\n", erro);
  }
}
// tratarErroFuncaoInexistente();

console.log("-----------------");
console.log("Exercício 3");

function tratarErroAcessarPropriedadeNull() {
  const objeto = null;
  try {
    var1 = objeto.propriedade;
  } catch (erro) {
    console.error("Propriedade inválida:\n", erro);
  }
}
// tratarErroAcessarPropriedadeNull();

console.log("-----------------");
console.log("Exercício 4");

function tratarErroPropriedadeInexistente() {
  const objeto = {};
  try {
    var1 = objeto.lucas.valor;
  } catch (erro) {
    console.error(erro);
  }
}
// tratarErroPropriedadeInexistente();

console.log("-----------------");
console.log("Exercício 5");

function tratarErroConversaoTipo() {
  let numero = "Hashtag";
  //   numero = "3";
  try {
    const var1 = parseInt(numero);
    if (isNaN(var1)) {
      throw new Error("Não foi possível converter a string em número");
    }
    console.log("Número convertido com Sucesso: ", var1);
  } catch (erro) {
    console.error(erro);
  }
  // if (isNaN)
}
// tratarErroConversaoTipo();

console.log("-----------------");
console.log("Exercício 6");

function tratarErroDivisaoPorZero() {
  try {
    const dividendo = 10;
    const divisor = 3;
    if (divisor === 0) {
      throw new Error("Divisor igual a 0 resulta em valor infinito");
    }
    return console.log("Sucesso: ", (dividendo / divisor).toFixed(3));
  } catch (erro) {
    console.error(erro);
  }
}
// tratarErroDivisaoPorZero();

console.log("-----------------");
console.log("Exercício 7");
function lerArquivo() {
  try {
    const var1 = read(texto.txt);
    console.log(var1);
  } catch (erro) {
    console.error(erro);
  } finally {
    console.log("Fechando Arquivo...");
    console.log("Arquivo fechado com Sucesso!");
  }
}
const fs = require("fs");
function lerArquivoFS() {
  try {
    const conteudoDoArquivo = fs.readFileSync("./texto.txt", "utf-8");
    console.log(conteudoDoArquivo);
  } catch (erro) {
    console.error("Erro ao ler o arquivo: ", erro);
  } finally {
    console.log("Fechando Arquivo...");
    console.log("Arquivo fechado com Sucesso!");
  }
}
// lerArquivo();
// console.log("** Mudando o modo de ler arquivo");
// lerArquivoFS();

console.log("-----------------");
console.log("Exercício 8");
function conectarBancoDeDados() {
  conexaoString = "Conectando string com a var string definida";
  try {
    bancoDadosConnect = banco.conect(conexaoString);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log("Fechando Conexão...");
    console.log("Conexão Fechada com Sucesso!");
  }
}
conectarBancoDeDados();
