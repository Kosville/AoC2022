const { sum, max, intersection } = require('lodash');
const { input } = require('./input');

const priorities = 'abcdefghijklmnopqrstuvwxyz'

let points = 0;

const getPriorityPoints = (sacks) => {
  const co = intersection(...sacks)[0];
  const pri = [...priorities.split(''), ...priorities.split('').map(p => p.toUpperCase())].indexOf(co) + 1;
  console.log(pri)
  return pri
}

const day3_2 = () => {
  const sackContents = input.split('\n').map(sack => {
    return sack.split('')
  });

  for (let i = 0; i < sackContents.length; i = i+3) {
    points += getPriorityPoints(sackContents.slice(i, i+3)) 
  }


  return points;
}

module.exports = {day3_2}