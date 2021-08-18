let text = "Please visit Microsoft!";
let findText = (text, word) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] == word[0]) {
      let index = i;
      let j = 0;
      let flag = 1;
      while (j < word.length - 1) {
        if (text[++index] == word[++j]) {
          continue;
        } else {
          flag = 0;
        }
      }
      if (j == word.length - 1 && flag == 1) {
        return i;
      }
    }
  }
  return false;
};

let replaceText = (text, subStr, replace) => {
  let newString = "";
  let index = findText(text, subStr);
  for (let i = 0; i < index; i++) {
    newString += text[i];
  }
  newString += replace;
  for (let i = index + subStr.length; i < text.length; i++) {
    newString += text[i];
  }
  return newString;
};

console.log(replaceText(text, "Microsoft", "Google"));
