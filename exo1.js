console.log ("EXO1 : 2 éléments de la liste ont-ils k comme somme ?")

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

const list = [10, 15, 3, 19];
console.log("liste = [" + list+ "]")
console.log("k = 17 ? : " + isSum(list, 17));
console.log("k = 19 ? : " + isSum(list, 19));