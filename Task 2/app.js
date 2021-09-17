let i = 1;

const image = document.getElementById("container");
const zMinus = document.getElementById("btn-minus");
const zPlus = document.getElementById("btn-plus");

const throttle = (callback, delay) => {
  let throttleTimeout = null;

  const throttledEventHandler = () => {
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

const zoomin = throttle(() => {
  i += 0.1;
  image.style.transform = "scale(" + i + ")";
}, 500);

const zoomout = throttle(() => {
  i -= 0.1;
  image.style.transform = "scale(" + i + ")";
}, 500);

zPlus.addEventListener("mousemove", zoomin);
zMinus.addEventListener("mousemove", zoomout);
