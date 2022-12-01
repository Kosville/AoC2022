const { sum, max } = require('lodash');
const { input } = require('./input')

const day1 = () => {
  const lines = input.split('\n\n');
  const elvesSum = lines.map(e => sum(e.split('\n').map(n => Number(n))))
  return max(elvesSum)
}

const day1_2 = () => {
  const lines = input.split('\n\n');
  const elvesSum = lines.map(e => sum(e.split('\n').map(n => Number(n))))
  const sorted = elvesSum.sort((a,b) => b-a)
  return sum(sorted.splice(0,3))
}

module.exports = {day1, day1_2}