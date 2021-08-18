// String length.........................................
// //text.length;
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
// console.log(str1.len());

// String slicing............................................
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

// Replacing String Content ...................................
// // let newText = text.replace("Microso", "Google");
// let text = "Please visit Microsoft!";
// let findText = (text, word) => {
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] == word[0]) {
//       let index = i;
//       let j = 0;
//       let flag = 1;
//       while (j < word.length - 1) {
//         if (text[++index] == word[++j]) {
//           continue;
//         } else {
//           flag = 0;
//         }
//       }
//       if (j == word.length - 1 && flag == 1) {
//         return i;
//       }
//     }
//   }
//   return false;
// };

// let replaceText = (text, subStr, replace) => {
//   let newString = "";
//   let index = findText(text, subStr);
//   for (let i = 0; i < index; i++) {
//     newString += text[i];
//   }
//   newString += replace;
//   for (let i = index + subStr.length; i < text.length; i++) {
//     newString += text[i];
//   }
//   return newString;
// };

// console.log(replaceText(text, "Microsoft", "Google"));
