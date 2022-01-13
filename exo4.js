console.log("EXO4")
const sunSetVue2 = (array, init=0, n=0) => {
  let max = array[init];
  if (init == array.length - 1) {
    n += 1;
    return n
  } else {
    for (let i = init + 1; i < array.length; i++) {
      if (array[i] > max) {
        init = i;
        return sunSetVue2(array, init, n)
      }
    }
    n += 1;
    init += 1;
    return sunSetVue2(array, init, n)
  }
}


console.log("[3, 7, 8, 3, 6, 1] : " + sunSetVue2(list1) + " appart(s) avec vue")
console.log("[1, 4, 5, 8] : " + sunSetVue2(list2) + " appart(s) avec vue")
console.log("fonction = sunSetVue2(array)")