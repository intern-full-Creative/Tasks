let i = 1;

let image = document.getElementById("container");
let zMinus = document.getElementById("btn-minus");
let zPlus = document.getElementById("btn-plus");

let throttle = (callback, delay) => {
  let throttleTimeout = null;

  let throttledEventHandler = () => {
    if (!throttleTimeout) {
      callback();
      throttleTimeout = setTimeout(() => {
        throttleTimeout = null;
      }, delay);
      console.log(throttleTimeout);
    }
  };

  return throttledEventHandler;
};

let zoomin = throttle(() => {
  i += 0.1;
  image.style.transform = "scale(" + i + ")";
}, 500);

let zoomout = throttle(() => {
  i -= 0.1;
  image.style.transform = "scale(" + i + ")";
}, 500);

zPlus.addEventListener("mousemove", zoomin);
zMinus.addEventListener("mousemove", zoomout);
