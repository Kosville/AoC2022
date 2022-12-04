const { sum, max, intersection } = require('lodash');
const { input } = require('./input');

const priorities = 'abcdefghijklmnopqrstuvwxyz'

let points = 0;

const getPriorityPoints = (sack) => {
  const co = intersection(sack[0].split(''), sack[1].split(''))[0];
  const pri = [...priorities.split(''), ...priorities.split('').map(p => p.toUpperCase())].indexOf(co) + 1;
  console.log(co, pri)
  return pri
}

const day3 = () => {
  const sackContents = input.split('\n').map(sack => {
    const le = sack.length/2
    return [sack.substring(0,le), sack.substring(le, sack.length)]
  });
  console.log(sackContents)

  points = sum(sackContents.map(sack => getPriorityPoints(sack)))

  return points;
}

module.exports = {day3}