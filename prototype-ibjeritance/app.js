function func1() {
  this.name = "jith";
}

function func2() {
  this.age = 12;
}

let obj1 = new func1();

let obj2 = new func2();

// obj2.__proto__ = obj1;

Object.setPrototypeOf(obj2, obj1);

console.log(obj2.name);
