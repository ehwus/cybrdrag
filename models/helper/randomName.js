const parse = require('csv-parse');
const fs = require('fs');

const randomName = async function () {
  firstName = [];
  lastName = [];
  returnString = '';

  let parser = fs
    .createReadStream(require('path').resolve(__dirname, 'queens.csv'))
    .pipe(parse());

  for await (const record of parser) {
    firstName.push(record[0]);
    lastName.push(record[1]);
  }

  returnString += firstName[Math.floor(Math.random() * firstName.length)];
  returnString += ' ';
  returnString += lastName[Math.floor(Math.random() * lastName.length)];

  return returnString;
};

module.exports = randomName;
