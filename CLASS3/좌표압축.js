const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const array = input.shift().split(' ').map(Number);
const set = [...new Set(array)];
const object = {};
set.sort((a,b)=>a-b);
set.forEach((item,index) => {object[item] = index})
console.log(object);
const result = new Array(N).fill(0);
for(let i=0; i<N; i++){
  result[i] = object[array[i]];
}
console.log(result.join(' '));