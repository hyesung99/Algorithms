const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = Number(input.shift());

for(let i=0; i<N; i++){
  const heights = input.shift().split(' ').map(Number);
  const time = heights.shift();
  let answer = 0;
  let cnt = 1;
  const sorted = [heights.shift()];
  for(let height of heights){
    for(let i=0; i<cnt; i++){
      if(height < heights[i]){
        
      }
    }
  }
  
}