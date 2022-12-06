const fs = require('fs');
const { flatten, difference, uniq } = require('lodash');
const path = require('path');
  
const getInput = () => {
  return fs.readFileSync(path.join(__dirname,'./input.txt'),
  {encoding:'utf8', flag:'r'});
}

const hasUniqueChars = (chars) => {
  return uniq(chars).length === chars.length
}


const day6 = () => {
  const input = getInput().split('');
  for (let i = 14; i < input.length; i++) {
    if (hasUniqueChars(input.slice(i-14, i))) {
      return i;
    }
  }
  return false;
}

module.exports = {day6}