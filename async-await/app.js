let completedPromise = [];
let incompletePromise = [];

let createPromise = async (time, n) => {
  let promise = new Promise((resolve, reject) => {
    if (time < 5000) {
      resolve(n);
    }
    setTimeout(() => {
      reject(n);
    }, time);
  });
  let result = await promise;
  return result;
};

let p1 = createPromise(1000, 1);
let p2 = createPromise(6000, 2);
let p3 = createPromise(7000, 3);
let p4 = createPromise(2000, 4);
let p5 = createPromise(8000, 5);
let p6 = createPromise(9000, 6);
let p7 = createPromise(3000, 7);

setTimeout(() => {
  console.log(`The completed promises are: ${completedPromise}`);
}, 5000);

let promises = [p1, p2, p3, p4, p5, p6, p7];

promises.forEach((element) => {
  element.then(
    (n) => completedPromise.push(n),
    (n) => incompletePromise.push(n)
  );
});
