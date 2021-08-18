class strLength {
  constructor(text) {
    this.text = text;
  }
  len() {
    let length = 0;
    for (const i of this.text) {
      length++;
    }
    return length;
  }
}
const text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let str1 = new strLength(text1);
console.log(str1.len());
