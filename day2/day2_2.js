const { sum } = require('lodash');
const { input } = require('./input');

// A rock -1
// B paper -2
// C scissors -3 
// X rock 1
// Y paper 2
// Z scissors 3

const resultMap = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6
}

// win 6
// draw 3
// lose 0


let points = 0;

const getGameResultpoints = (games) => {
  return sum(games.map(g => {
    const o = g[0];
    const r = g[1]
    if (r === 3) {
      return r + o
    } else if(r === 0) {
      return (o === 1 ? 3 : (o === 2 ? 1 : 2)) + r
    }
    return (o === 1 ? 2 : (o === 2 ? 3 : 1)) + r
  }));
}

// const getHandPoints = (games)

const day2_2 = () => {
  const games = input.split('\n').map(game => {
    return game.split(' ').map(g => resultMap[g])
  });

  // count game result points
  points += getGameResultpoints(games)

  return points;
}

module.exports = {day2_2}