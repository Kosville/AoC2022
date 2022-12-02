const { sum, max } = require('lodash');
const { input } = require('./input');

// A rock -1
// B paper -2
// C scissors -3 
// X rock 1
// Y paper 2
// Z scissors 3

const resultMap = {
  A: -1,
  B: -2,
  C: -3,
  X: 1,
  Y: 2,
  Z: 3
}

// win 6
// draw 3
// lose 0


let points = 0;

const getGameResultpoints = (games) => {
  return sum(games.map(g => {
    const res = sum(g).toString();
    if (['-2', '1'].includes(res)) {
      return 6 + g[1]
    } else if(['-1', '2'].includes(res)) {
      return 0 + g[1]
    }
    return 3 + g[1]
  }));
}

// const getHandPoints = (games)

const day2 = () => {
  const games = input.split('\n').map(game => {
    return game.split(' ').map(g => resultMap[g])
  });

  // count game result points
  points += getGameResultpoints(games)

  return points;
}

module.exports = {day2}