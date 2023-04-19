const [H,W,N,M] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(Number);


let answer = 0;
for(let i=0; i<H; i+=N+1){
  for(let j=0; j<W; j+=M+1){
    answer++;
  }
}

console.log(answer);