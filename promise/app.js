let fuel = false;
let engine_temp = true;

let empty_tank = function () {
  return new Promise(function (resolve, reject) {
    fuel
      ? resolve("The car has enough fuel.")
      : reject("The car doesn't have enough fuel.");
  });
};

let engine = function (msg) {
  return new Promise(function (resolve, reject) {
    engine_temp
      ? resolve(msg + "The engine is at right temperature.")
      : reject(msg + "The engine is over heating.");
  });
};

let travel = function (msg) {
  return new Promise(function (resolve, reject) {
    fuel && engine_temp
      ? resolve(msg + "The car is safe for driving.")
      : reject(msg + "The car is not safe for driving.");
  });
};

empty_tank()
  .then((result) => engine(result))
  .then((result) => travel(result))
  .then((result) => console.log("Done!" + result))
  .catch((result) => console.log("Done!" + result));
