const parse = require('csv-parse')
const parser = parse({ delimiter: ','})
const fs = require('fs')
let csv = fs.readFileSync(require('path').resolve(__dirname, "queens.csv"))

const randomName = function () {
  firstName = []
  lastName = []
  parse(csv).on('data', (row) => {

    firstName.push(row[0])
    lastName.push(row[1])
  })
  let returnString = ''
  console.log(firstName)
  //
  // returnString += firstName[Math.floor(Math.random() * firstName.length)]
  //
  // returnString += ' '
  //
  // returnString += lastName[Math.floor(Math.random() * lastName.length)]
  //
  // return returnString;
};

module.exports = randomName
