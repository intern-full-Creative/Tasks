let createPromis = (time, n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed p${n}`);
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

let promises = [p1, p2, p3, p4, p5, p6, p7];

setTimeout(() => {
  promises.forEach(checkPromise);
}, 5000);

let checkPromise = (p) => {
  let result = p.then(console.log(p)).catch();
  return result;
};
