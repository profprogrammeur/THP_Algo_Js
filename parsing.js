function parsingFile() {
  const fs = require('fs');
  const fileName = process.argv[2];

  function numberCheck(number_array) {
    for (let i = 0; i < number_array.length; i++) {
      if (isNaN(number_array[i]) === true) {
        return (false);
      }
    } 
    return (true);
  }


  try {
    const data = fs.readFileSync(fileName, 'utf8');
    number_array = data.slice().split(" ").sort();
    // console.log(number_array)
  }
 
  catch (error) {
    console.error(error.message);
    return;
  }

  if (numberCheck(number_array) === false) {
    console.log("Merci de bien utiliser des nombres dans la liste")
    return null;
  }
  const final_array = number_array.map(Number);
  // console.log(final_array)
  return final_array;
}

module.exports = { parsingFile };