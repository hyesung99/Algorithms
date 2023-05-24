const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = Number(input.shift());
const map = [];
const cut = [[0,0,N]];
answer = 0;
for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

let blue = 0;
let white = 0;
outer : while(cut.length !== 0){
  let [start_x,start_y,width] = cut.shift();
  // console.log(start_x,start_y, width);
  if(width === 1 && map[start_x][start_y] === 1){
    blue++;
    continue;
  }
  if(width === 1 && map[start_x][start_y] === 0){
    white++;
    continue;
  }
  if(map[start_x][start_y] === 1){
    for(let i=start_x; i<start_x+width; i++){
      for(let j=start_y; j<start_y+width; j++){
        if(map[i][j] === 0){
          cut.push([start_x,start_y,width/2]);
          cut.push([start_x,start_y+width/2,width/2]);
          cut.push([start_x+width/2,start_y,width/2]);
          cut.push([start_x+width/2,start_y+width/2,width/2]);
          continue outer;
        }
      }
    }
    blue++;
  }
  else{
    for(let i=start_x; i<start_x+width; i++){
      for(let j=start_y; j<start_y+width; j++){
        if(map[i][j] === 1){
          cut.push([start_x,start_y,width/2]);
          cut.push([start_x,start_y+width/2,width/2]);
          cut.push([start_x+width/2,start_y,width/2]);
          cut.push([start_x+width/2,start_y+width/2,width/2]);
          continue outer;
        }
      }
    }
    white++;  
  }
}
console.log(white);
console.log(blue);