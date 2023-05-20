const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [H,W] = input.shift().split(' ').map(Number);
const blocks = input.shift().split(' ').map(Number);

const map = Array.from({length:H}, () => new Array(W).fill(0));
let answer = 0;
for(let col=0; col<W; col++){
  for(let i=0; i<blocks[col]; i++){
    map[H-1-i][col] = 1;
  }
}

for(let row=H-1; row>=0; row--){
  
  col = 0;

  while(col < W){
    if(map[row][col] === 1){
      let count = 0;
      col++;
      while(col < W && map[row][col] === 0){
        col++;
        count++;
      }
      if(col !== W){
        answer+=count;
      }
    }else{
      col++
    }
  }
}

console.log(answer);