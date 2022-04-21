console.log("EXO 1 complexité O(n²): ")
const lib = require("./parsing");
let list = lib.parsingFile();
if (list) {

  console.log(list)
  let k = parseInt(process.argv[3], 10);
  if (isNaN(k)) {
    console.log("Merci d'utiliser un chiffre comme dernier paramètre")
    return;
  }

  console.log("2 éléments de cet array ont-ils " + k +" comme somme ?")

  const isSum = (list, k) => {
    for (let i = 0; i < (list.length); i++) {
      for (let j = i+1; j < (list.length); j++) {
        if ((list[i] + list[j]) == k) {
          return true
        }
      }
    } 
      return false
  }

  console.log(isSum(list,k))
}
