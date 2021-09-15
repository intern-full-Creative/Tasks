// document.querySelector("#btn").addEventListener("click", () => {
//   console.log("Clicked");
// });

// Adding Throttle:

let throttle = (fn, delay) => {
  let last = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

document.querySelector("#btn").addEventListener(
  "click",
  throttle(() => {
    console.log("Clicked");
  }, 3000)
);
