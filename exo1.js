console.log("EXO 1 complexité O(n²): ")
const lib = require("./parsing");
let numberArray = lib.parsingFile();
if (numberArray) {


console.log(numberArray)
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
      // console.log(list[i] + list[j])
    }
  } 
    return false
}

console.log(isSum(numberArray,k))
}
// const list = [1, 3, 7, 13, 6];
// console.log("list = [" + list + "]")
// k = 3
// console.log("k = " + k + " ?   " + isSum(list, k));
// k = 4
// console.log("k = " + k + " ?   " + isSum(list, k));
// k = 16
// console.log("k = " + k + " ?   " + isSum(list, k));
// k = 19
// console.log("k = " + k + " ?   " + isSum(list, k));

// console.log("fonction = isSum(array,k)")

// let numberArray = lib.parsingFile();