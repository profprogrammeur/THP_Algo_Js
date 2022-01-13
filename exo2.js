console.log("EXO2")

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

const list1 = [3, 7, 8, 3, 6, 1];
const list2 = [1, 4, 5, 8];

console.log("[3, 7, 8, 3, 6, 1] : " + sunSetVue(list1) + " appart(s) avec vue")
console.log("[1, 4, 5, 8] : " + sunSetVue(list2) + " appart(s) avec vue")
console.log("fonction = sunSetVue(array)")
