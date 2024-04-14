function writeThisMessage(message) {
  console.log(message);
}

const myFunctionWrite = function () {
  writeThisMessage("Escrevendo a Segunda Vez");
};

writeThisMessage("Escreva isso");
myFunctionWrite();

const myFunctionArrowVersion = (message) => {
  console.log(message);
};
myFunctionArrowVersion("Escrevendo Terceira vez");

const myFunctionArrowVersionOneInstruction = (message1, message2) =>
  console.log(message1 + " " + message2);
myFunctionArrowVersionOneInstruction(
  "Escrevendo Quarta vez",
  "E esse parâmetro"
);
