function getUser(callbackFunction) {
  console.log("Waiting...");
  setTimeout(function () {
    callbackFunction({ id: 0, name: "Lucas", surname: "Marciano" });
  }, 1000);
}

function getFriendList(user, callbakc) {
  console.log(`Waiting...Getting Friends from ${user.name} ${user.surname}`);
  setTimeout(() => {
    callbakc(["Lucas", "Caio", "Tata"]);
  }, 1000);
}

function getPhotos(user, callback) {
  console.log(`Waiting...Getting Photos from ${user}`);
  setTimeout(() => {
    callback(["egito", "brazil", "uruguay"]);
  }, 1000);
}

// getUser((user) => {
//   getFriendList(user, (friends) => {
//     getPhotos(friends[2], console.log);
//   });
// });

// TO avoid do that "Callback Hell" we could use: PROMISES
// Promises are objects that represents all states of an async function
// --Pending: Operation is occuring
// --Fulfilled/Resolved: Success
// --Rejected: An error occurs

// const booleanResponse = false;
// const promise = new Promise((resolve, reject) => {
//   //   console.log("Prometo que vou te pagar");
//   setTimeout(() => {
//     if (booleanResponse) {
//       resolve("Toma aqui o seu pagamento");
//     } else {
//       reject("Não vou conseguir te pagar");
//     }
//   }, 4000);
// });

// Affirmative and Negative at the same structure
// promise
//   .then((response) => {
//     console.log(response);
//     console.log("Que legal que você pagou");
//   })
//   .catch((response) => {
//     console.log(response);
//     console.log("QUe raiva, não te empresto mais");
//   });

function getUser2() {
  console.log("Waiting...");
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 0, name: "Lucas", surname: "Marciano" });
    }, 2000);
  });
  return promise2;
}

function getFriendList2(user) {
  console.log(`Waiting...Getting Friends from ${user.name} ${user.surname}`);
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Lucas", "Caio", "Tata"]);
    }, 2000);
  });
  return promise3;
}

function getPhotos2(friends) {
  console.log(`Waiting...Getting Photos from ${friends}`);
  const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["egito", "brazil", "uruguay"]);
      //   reject("ERRO! Usuário desabilitou fotos");
    }, 2000);
  });
  return promise4;
}

// O melhor jeito de entender isso é ir com calma e cada response dar o console log no response da função
console.log(getUser2().then((user) => getFriendList2(user))); // Como isso é uma promise, posso usar o then
getUser2()
  .then((user) => getFriendList2(user))
  .then((friends) => getPhotos2(friends[1]))
  .then((photos) => console.log(photos))
  .catch((error) => console.error(error))
  .finally(() => console.log("Fim da comunicação"));

const user = getUser2(); // In order to do that, I need to wait this promise to resolve inside an async function
console.log("User: ", user);

async function displayPhotos() {
  try {
    const correctUser = await getUser2();
    const correctFriends = await getFriendList2(correctUser);
    const correctPhotos = await getPhotos2(correctFriends[2]);
    console.log("Fotos: ", correctPhotos);
  } catch (erro) {
    console.error(erro);
  } finally {
    console.log("Fim da comunicação");
  }
}
displayPhotos();
