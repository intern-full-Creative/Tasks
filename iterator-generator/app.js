function* alpha() {
  yield "a";
  yield "b";
  yield "c";
  yield "d";
}

let iterator = alpha();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.next());
