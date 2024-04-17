// console.log("Exercício 1");

// function imprimirMensagem(mensagem, callback) {
//   console.log(mensagem);
//   return callback(mensagem);
// }

// function countCharacter(stringa) {
//   return stringa.length;
// }

// const lenmessage = imprimirMensagem("Lucas", countCharacter);
// console.log(lenmessage);
// console.log("--------------------------------------------------");

// console.log("Exercício 2");
// const fs = require("fs");
// const fileName = "./03.Ex/textoExercicio2.txt";

// function lerArquivo(fileName, callback) {
//   fs.readFile(fileName, "utf8", (err, data) => {
//     if (err) {
//       console.error("Erro:\n", err.message);
//       return;
//     }
//     callback(data);
//   });
// }
// lerArquivo(fileName, (respostaCallback) => {
//   console.log(respostaCallback);
// });

// console.log("--------------------------------------------------");

// console.log("Exercício 3");
// const promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Promise Resolvida");
//   }, 1000);
// });
// promise3.then(console.log);
// console.log("--------------------------------------------------");

// console.log("Exercício 4");

// async function writeOlaMundo() {
//   const ola1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Olá");
//     }, 1000);
//   });
//   const mundo1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Mundo");
//     }, 2000);
//   });
//   ola1.then((resultadoOla) =>
//     mundo1.then((resultadoMundo) => console.log(resultadoOla, resultadoMundo))
//   );
// }

// writeOlaMundo();
// console.log("--------------------------------------------------");

// console.log("Exercício 5");

// async function handleError() {
//   const toReturn = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("ERRO");
//     }, 1000);
//   });
//   return toReturn;
// }
// handleError()
//   .then()
//   .catch((erro) => {
//     console.error(erro);
//   });
// console.log("--------------------------------------------------");

// console.log("Exercício 6");
// function allPromises() {
//   const result = Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("1");
//       }, 1000);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("2");
//       }, 2000);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("3");
//       }, 3000);
//     }),
//   ]);
//   return result;
// }
// allPromises().then(console.log);
// console.log("--------------------------------------------------");

// console.log("Exercício 7");
// function pegarDadosApi(user) {
//   const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: user,
//         age: Math.floor(50 * Math.random()),
//         color: "blue",
//       });
//     }, 2000);
//   });
//   return p1;
// }

// async function buscarDados(user) {
//   const result = await pegarDadosApi(user);
//   console.log(result);
//   return result;
// }
// buscarDados("Lucas");

// console.log("--------------------------------------------------");

// console.log("Exercício 8");
// function pegarDadosApi(user) {
//   const p1 = new Promise((resolve, reject) => {
//     const age = Math.floor(50 * Math.random());
//     console.log(age);
//     if (age <= 25) {
//       setTimeout(() => {
//         resolve({
//           name: user,
//           age: Math.floor(50 * Math.random()),
//           color: "blue",
//         });
//       }, 2000);
//     } else {
//       reject("ERRO!!");
//     }
//   });
//   return p1;
// }
// async function obterDados(user) {
//   try {
//     const result = await pegarDadosApi(user);
//     console.log(result);
//     return result;
//   } catch (erro) {
//     console.error(erro);
//   }
// }
// obterDados();
// console.log("--------------------------------------------------");

// console.log("Exercício 9");
// async function buscarMultiplosDados() {
//   const result = await Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id: 1, name: "Lucas", age: 25 });
//       }, 1000);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id: 2, name: "Caio", age: 24 });
//       }, 1500);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ id: 3, name: "Tata", age: 26 });
//       }, 2000);
//     }),
//   ]);
//   console.log(result)
// }
// buscarMultiplosDados();
// console.log("--------------------------------------------------");

console.log("Exercício 10");
async function obterDadosComFallback() {
  try {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 1000);
    });
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Lucas);
      }, 1500);
    });
    promise1.then(console.log);
    promise2.then(console.log);
    promise3.then(console.log);
  } catch (erro) {
    console.error(eror);
  }
}
obterDadosComFallback();
