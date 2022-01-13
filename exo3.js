console.log("EXO3")

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


console.log("liste = [10, 15, 3, 7]")
console.log("fonction = isSum2(array,k)")
console.log("Somme k de 2 elements = 17 ?? : " + isSum2(list, 17));
console.log("Somme k de 2 elements = 19 ?? : " + isSum2(list, 19));