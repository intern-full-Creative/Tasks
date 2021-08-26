let empty_tank = function () {
  return new Promise(function (resolve, reject) {
    resolve("The car doesn't have enough fuel.");
  });
};

let engine = function (msg) {
  return new Promise(function (resolve, reject) {
    resolve(msg + "The engine is over heating.");
  });
};

let travel = function (msg) {
  return new Promise(function (resolve, reject) {
    resolve(msg + "The car is not safe for driving.");
  });
};

empty_tank()
  .then(function (result) {
    return engine(result);
  })
  .then(function (result) {
    return travel(result);
  })
  .then(function (result) {
    console.log("Done!" + result);
  });
