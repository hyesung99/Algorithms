const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const N = Number(input.shift());
const population = input.shift().split(' ').map(Number);

const graph = [];

for(let i=0; i<N; i++){
  graph.push(input.shift().split(' ').map(Number));
}

console.log(graph);