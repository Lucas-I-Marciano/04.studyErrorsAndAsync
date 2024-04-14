console.log(1);
const result = setTimeout(() => write2OnConsole(console.log), 2000); // This return what setTimeout do, not the function's return
console.log(result); // I want this result to wait until the async function ends, inside setTimeout. To do that,
console.log(3);
write4OnConsole();

function write2OnConsole(callbackFunction) {
  console.log(2);
  callbackFunction("Procedure Complete!");
}
function write4OnConsole() {
  console.log(4);
}
