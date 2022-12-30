const fs = require('fs');
const { max } = require('lodash');
const path = require('path');
  
const getInput = () => {
  return fs.readFileSync(path.join(__dirname,'./input.txt'),
  {encoding:'utf8', flag:'r'});
}

const getVisibilityValue = (value, array) => {
    if (array.length === 0) {
        return 0;
    }
    let blockingIndex = array.findIndex(r => r >= value) + 1;
    if(!blockingIndex) {
        blockingIndex = array.length
    }
    return blockingIndex;
}

const getVisibilityScore = (char, rowIdx, colIdx) => {
  const n = Number(char);
  const rStart = rows[rowIdx].slice(0, colIdx).reverse();
  const rEnd = rows[rowIdx].slice(colIdx+1)
  const cStart = cols[colIdx].slice(0, rowIdx).reverse();
  const cEnd = cols[colIdx].slice(rowIdx+1)

  const maxLeft = getVisibilityValue(n, rStart)
  const maxRight = getVisibilityValue(n, rEnd)
  const maxTop = getVisibilityValue(n, cStart)
  const maxBottom = getVisibilityValue(n, cEnd)
  
  return maxLeft*maxRight*maxTop*maxBottom;
}

let visibilityScores = [];
let cols = [];
let rows;

const day8_2 = () => {
  const input = getInput();
  rows = input.split('\n').map(r => r.split('').map(v => Number(v)));
  rows[0].forEach((v, i) => {
    cols.push(rows.map(r => r[i]))
  })

  rows.forEach((r, i) => {
    r.forEach((c, idx) => {
      visibilityScores.push(getVisibilityScore(c, i, idx));
    })
  })

  return max(visibilityScores);
}

module.exports = {day8_2}