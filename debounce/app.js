// document.querySelector("#btn").addEventListener("click", () => {
//   console.log("Clicked");
// });

// Adding debounce:

let debounce = (fn, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  };
};

document.querySelector("#btn").addEventListener(
  "click",
  debounce(() => {
    console.log("Clicked");
  }, 2000)
);
