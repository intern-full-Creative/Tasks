// function inheritance

function func1() {
	this.name = "jith";
}

function func2() {
	func1.apply(this)
	this.age = 12;
}

let obj1 = new func2();

console.log(obj1.name)