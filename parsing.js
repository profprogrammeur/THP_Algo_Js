function parsingFile() {
  const fs = require('fs');
  const fileName = process.argv[2];

  function numberCheck(list) {
    for (let i = 0; i < list.length; i++) {
      if (isNaN(list[i]) === true) {
        return (false);
      }
    } 
    return (true);
  }

  try {
    const data = fs.readFileSync(fileName, 'utf8');
    list = data.slice().split(" ");
    // console.log(list)
  }
 
  catch (error) {
    console.error(error.message);
    return;
  }

  if (numberCheck(list) === false) {
    console.log("Merci de bien utiliser des nombres dans la liste")
    return null;
  }
  const final_array = list.map(Number);
  // console.log(final_array)
  return final_array;
}

module.exports = { parsingFile };