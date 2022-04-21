console.log("EXO 2 complexité O(n²): ")
const lib = require("./parsing");
let list = lib.parsingFile();
if (list) {

const sunSetVue = (list) => {
  let n = 0;
  for (let i = 0; i < list.length; i++) {
    let vue = 0;
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        vue += 1;
      }
    }
    if (vue == list.length - (i + 1)) {
      n += 1;
    }
  }
  return n;
}


console.log(list)
console.log(sunSetVue(list) + " appart(s) avec vue")

}