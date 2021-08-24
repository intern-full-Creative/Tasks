let completedPromise = [];
let incompletedPromise = [];

let createPromis = (time, n) => {
  return new Promise((resolve, reject) => {
    if (time < 5000) {
      resolve(n);
    }
    setTimeout(() => {
      reject(n);
    }, time);
  });
};

let p1 = createPromis(1000, 1);
let p2 = createPromis(6000, 2);
let p3 = createPromis(7000, 3);
let p4 = createPromis(2000, 4);
let p5 = createPromis(8000, 5);
let p6 = createPromis(9000, 6);
let p7 = createPromis(3000, 7);

setTimeout(() => {
  console.log(`The completed promises are: ${completedPromise}`);
}, 5000);

let promises = [p1, p2, p3, p4, p5, p6, p7];

promises.forEach((element) => {
  element.then(
    (n) => completedPromise.push(n),
    (n) => console.log(`Promise ${n} is incomplete`)
  );
});
