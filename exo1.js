console.log ("EXO1")

const isSum = (list, k) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = i+1; j < list.length; j++) {
      if ((list[i] + list[j]) == k) {
        return true
      }
    }
    return false
  }
}

const list = [10, 15, 3, 7];
console.log("liste = [10, 15, 3, 7]")
console.log("fonction = isSum(array,k)")
console.log("Somme k de 2 elements = 17 ?? : " + isSum(list, 17));
console.log("Somme k de 2 elements = 19 ?? : " + isSum(list, 19));