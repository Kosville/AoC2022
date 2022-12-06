const fs = require('fs');
const { flatten } = require('lodash');
const path = require('path');
  
const getInput = () => {
  return fs.readFileSync(path.join(__dirname,'./input.txt'),
  {encoding:'utf8', flag:'r'});
}

const getStackArrays = (input) => {
  const stackStrings = input.split('\n\n')[0].split('\n')
  const stackIndexes = [];
  stackStrings[stackStrings.length-1].split('').forEach((char, i) => {
    if (parseInt(char)) {
      stackIndexes.push(i)
    }
  })
  stackStrings.pop();
  const stacks = stackIndexes.map(i => []);
  stackStrings.forEach(row => {
    const chars = row.split('')
    stackIndexes.forEach((idx, i) => {
      if (chars[idx] !== ' ') {
        stacks[i].unshift(chars[idx])
      }
    })
  })
  return stacks;
}

const assignCommand = (c, stacks) => {
  const count = c[0];
  const from = c[1]-1;
  const to = c[2]-1;
  const v = stacks[from].splice(stacks[from].length - count)
  stacks[to].push(...v)
  return stacks;
}

let stacks = [];

const day5_2 = () => {
  const input = getInput();
  stacks = getStackArrays(input)

  const commands =  input.split('\n\n')[1].split('\n').map(c => c.split(' ').filter((co, i) => i%2 !== 0).map(n => parseInt(n)));

  commands.forEach(c => {
    if (c && c[0]) {
      stacks = assignCommand(c, stacks);
    }
  })

  return flatten(stacks.map(s => s.pop())).join('');
}

module.exports = {day5_2}