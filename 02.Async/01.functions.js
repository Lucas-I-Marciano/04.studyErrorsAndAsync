function writeThisMessageOnConsole(message) {
  console.log(message);
}

writeThisMessageOnConsole("Mensagem com SUcesso!");
// setTimeout do not work with functions that need some parametres DIRECTLY, but it works if I put inside an annonimus function
// I can put an annonimus function on setTimeout if I need

// setTimeout(writeThisMessageOnConsole("Mensagem com SUcesso!"), 2000); // ERROR
setTimeout(function () {
  writeThisMessageOnConsole("Segunda mensagem com SUcesso!");
}, 2000);

// In order the get a cleaner code, I can put annonimus function into variables

const myFunction = function () {
  writeThisMessageOnConsole("Terceira mensagem com SUcesso!");
};
myFunction();
setTimeout(function () {
  myFunction();
}, 2000);
