
console.log("EXO 3 complexité O(n): ")
const lib = require("./parsing");
let list = lib.parsingFile();
if (list) {

  console.log(list)
  let k = parseInt(process.argv[3], 10);
  if (isNaN(k)) {
    console.log("Merci d'utiliser un chiffre comme dernier paramètre")
    return;
  }

  console.log("2 éléments de cet array ont-ils " + k + " comme somme ?")


  const isSum2 = (list, k) => {
    let i = 0;
    let j = i + 1;

    while (i < list.length && j < list.length) {
      if (list[i] + list[j] == k) {
        return true
      } else if (j == list.length - 1) {
        i += 1;
        j = i + 1;
      } else {
        j += 1;
      }
    }
    return false
  }

  console.log(isSum2(list, k))
}
