class strSlice extends strLength {
  constructor(text, start, end) {
    super(text);
    this.start = start;
    this.end = end;
  }
  slice() {
    let strNew = "";
    length = this.len(this.text);
    start < 0 ? (start += length) : start;
    end < 0 ? (end += length) : end;
    start == undefined ? (start = 0) : start;
    end == undefined ? (end = length) : end;
    for (const key in this.text) {
      if (key >= start && key < end) {
        strNew += this.text[key];
      }
    }
    return strNew;
  }
}
let text2 = "Apple, Banana, Kiwi";
const start = 7;
const end = 13;
let str2 = new strSlice(text2, start, end);
console.log(str2.slice());
