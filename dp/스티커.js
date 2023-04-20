const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const numTestCase = Number(input.shift());

for(let i=0; i<numTestCase; i++){
  let col = Number(input.shift())
  let sticker = [];
  for(let j=0; j<2; j++){
    sticker.push(input.shift().split(' ').map(Number));
  }
  // console.log(sticker);
  sticker[0][1] += sticker[1][0];
  sticker[1][1] += sticker[0][0];
  
  // console.log(dp);
  for(let x=2; x<col; x++){
    sticker[0][x] += Math.max(sticker[1][x-2],sticker[1][x-1]) 
    sticker[1][x] += Math.max(sticker[0][x-2],sticker[0][x-1]) 
  }
  console.log(Math.max(sticker[0][col-1],sticker[1][col-1]));
}
