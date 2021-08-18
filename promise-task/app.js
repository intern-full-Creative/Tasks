const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p2");
  }, 7000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p3");
  }, 7500);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p4");
  }, 4000);
});
const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p5");
  }, 6000);
});
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p6");
  }, 2000);
});
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed p7");
  }, 5000);
});

setTimeout(() => {
  Promise([p1, p2, p3, p4, p5, p6, p7]).then((values) => console.log(values));
}, 5000);
