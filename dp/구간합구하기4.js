const input = require('fs').readFileSync("input.txt").toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
const numbers = input.shift().split(' ').map(Number);
const ranges = input;

result = [];

const prefix = [numbers[0]];

for(let i=1; i<N; i++){
  prefix.push(numbers[i] + prefix[i-1]);
}

for(let k=0; k<M; k++){
  let range = ranges[k].split(' ').map(Number);
  if(range[0] === 1){
    result.push(prefix[range[1]-1]);
  }else{
    result.push(prefix[range[1]-1] - prefix[range[0]-2]);  
  }
}

console.log(result.join(' '));