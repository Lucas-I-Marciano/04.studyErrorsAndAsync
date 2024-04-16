const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1500);
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3500);
  }, 2000);
});

// console.log("Starting...");

// Promise.all([promise1, promise2]).then(console.log); // Something good about Primise.all is to execute all promise at the same time

async function generateTotalPrice() {
  const startTime = Date.now();
  const price1 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1500);
    }, 2000);
  });

  const price2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3500);
    }, 2000);
  });
  const endTime = Date.now();
  console.log(price1, price2, endTime - startTime);
}

generateTotalPrice();

async function generateTotalPrice2() {
  const startTime = Date.now();
  Promise.all([
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1500);
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3500);
      }, 2000);
    }),
  ])
    .then(console.log)
    .then(() => {
      const endTime = Date.now();
      console.log("Elapsed time: ", endTime - startTime);
    });
}

generateTotalPrice2();
