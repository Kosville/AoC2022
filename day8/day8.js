const fs = require('fs');
const { max, isEqual } = require('lodash');
const path = require('path');
  
const getInput = () => {
  return fs.readFileSync(path.join(__dirname,'./input.txt'),
  {encoding:'utf8', flag:'r'});
}

const isVisible = (char, rowIdx, colIdx) => {
  const n = Number(char);
  const rStart = rows[rowIdx].slice(0, colIdx)
  const rEnd = rows[rowIdx].slice(colIdx+1)
  const cStart = cols[colIdx].slice(0, rowIdx)
  const cEnd = cols[colIdx].slice(rowIdx+1)

  if (max(rEnd) == undefined || max(rStart) == undefined || max(cStart) == undefined || max(cEnd) == undefined) {
    return 1;
  }

  const maxLeft = max(rStart)
  const maxRight = max(rEnd)
  const maxTop = max(cStart)
  const maxBottom = max(cEnd)
  
  if (maxLeft < n) {
    return 1;
  } if (maxRight < n) {
    return 1;   
  } if (maxBottom < n) {
    return 1;
  } if (maxTop < n) {
    return 1; 
  }
  return 0;
}

let visibleTreesCount = 0;
let cols = [];
let rows;

const day8 = () => {
  const input = getInput();
  rows = input.split('\n').map(r => r.split('').map(v => Number(v)));
  rows[0].forEach((v, i) => {
    cols.push(rows.map(r => r[i]))
  })

  rows.forEach((r, i) => {
    r.forEach((c, idx) => {
      visibleTreesCount = visibleTreesCount + isVisible(c, i, idx);
    })
  })

  return visibleTreesCount;
}

module.exports = {day8}