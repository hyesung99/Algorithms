const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);
const [plus,minus,multiple, division] = input.shift().split(' ').map(Number);

console.log(numbers);
console.log([plus,minus,multiple, division]);
const sign = ['+','-','*','/'];

