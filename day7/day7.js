const fs = require('fs');
const { flatten, difference, uniq, sum, uniqBy } = require('lodash');
const path = require('path');

const dirs = [{name: '', id: 0, layer: 0, parent: undefined}];
const files = [];
let currentFolder = {name: '', id: 0, layer: 0, parent: undefined};

  
const getInput = () => {
  return fs.readFileSync(path.join(__dirname,'./input.txt'),
  {encoding:'utf8', flag:'r'});
}

const executeCommand = (c) => {
  if (c.startsWith('cd /')) {
    currentFolder = dirs.find(d => d.id === 0)
  } else if (c === 'cd ..') {
    currentFolder = dirs.find(d => d.id === currentFolder.parent)
  } else if (c.startsWith('cd')) {
    currentFolder = dirs.find(d => d.parent == currentFolder.id && d.name === c.split(' ')[1])
  }
}

const getDirSize = (id) => {
  let size = sum(files.filter(f => f.parent == id).map(f => Number(f.size)));
  size += sum(dirs.filter(d => d.parent == id).map(d => getDirSize(d.id)))
  return size;
}


const day7 = () => {
  const input = getInput().split('\n');
  input.forEach(c => {
    if(c.startsWith('$')){
      executeCommand(c.substring(2));
    } else if(c.startsWith('dir')) {
      if (!dirs.find(d => d.name == c.split(' ')[1] && d.parent == currentFolder.id)) { 
        dirs.push({id: dirs.length, name: c.split(' ')[1], layer: currentFolder.layer+1, parent: currentFolder.id})
      }
    } else {
      const f = c.split(' ')
      if (!files.find(f => f.parent == currentFolder.id && f.name == f[1])) {   
        files.push({name: f[1], size: f[0], parent:currentFolder.id})
      }
    }
  })

  dirSizes = dirs.map(d => {return {id: d.id, size:getDirSize(d.id)}});

  return sum(dirSizes.filter(ds => ds.size <= 100000).map(ds => ds.size));
}

module.exports = {day7}