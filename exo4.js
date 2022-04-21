console.log("EXO 4 complexité O(n): ")
const lib = require("./parsing");
let list = lib.parsingFile();

if (list) {
  const sunSetVue2 = (array, init = 0, n = 0) => {
    let max = array[init];
    if (init == array.length - 1  ) {
      n += 1;
      return n
    } else {
      for (let i = init + 1; i < array.length; i++) {
        if (array[i] > max ) {
         init = i;
          return sunSetVue2(array, init, n)
        } 
      }
      n += 1;
      init += 1;
      return sunSetVue2(array, init, n)
    }
  }

  console.log(list)
  console.log(sunSetVue2(list) + " appart(s) avec vue")

}





