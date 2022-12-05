const { inRange, sum } = require('lodash');
const { input } = require('./input');

let fullContains = 0;

const isInRange = (numbers, min, max) => {
  let inRa = false;
  numbers.forEach(n => {
    if (inRange(Number(n), Number(min), Number(max)+1)) {
      inRa = true;
    }
  });
  return inRa;
}

const fullyContained = (range1, range2) => {
  const r1 = isInRange(range1, range2[0], range2[1])
  const r2 = isInRange(range2, range1[0], range1[1])
  if (r1 || r2) { 
    console.log(r1, r2, range1, range2)
  }
  return (r1 || r2) ? 1 : 0;
}

const day4_2 = () => {
  const pairs = input.split('\n').map(pair => {
    const p = pair.split(',').map(range => range.split('-'))
    return p
  });

  fullContains = sum(pairs.map(p => fullyContained(p[0], p[1])))

  return fullContains;
}

module.exports = {day4_2}