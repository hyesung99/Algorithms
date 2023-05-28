const input = require('fs').readFileSync('input.txt').toString().split('\n');

const N = Number(input.shift());
const picture = [];
for(let i=0; i<N; i++){
  picture.push(input.shift().trim().split(''));
}

const RGBvisited = Array.from({length:N} , () => new Array(N).fill(false));
const RBvisited = Array.from({length:N} , () => new Array(N).fill(false));
const moves = [[1,0],[-1,0],[0,1],[0,-1]];

const BFS = (start_x,start_y,color,isRGB) => {

  if(isRGB){
    const willVisit = [[start_x,start_y]]
    while(willVisit.length !== 0){
      let [curr_x,curr_y] = willVisit.shift();
      for(let move of moves){
        let next_x = curr_x + move[0];
        let next_y = curr_y + move[1];
        if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N && !RGBvisited[next_x][next_y] && picture[next_x][next_y] === color){
          willVisit.push([next_x,next_y]);
          RGBvisited[next_x][next_y] = true;
        }
      }
    }
  }else{
    const willVisit = [[start_x,start_y]]
    if(color === 'G' || color === 'R'){
      color = ['R','G'];
    }else{
      color = ['B'];
    }
    while(willVisit.length !== 0){
      let [curr_x,curr_y] = willVisit.shift();
      for(let move of moves){
        let next_x = curr_x + move[0];
        let next_y = curr_y + move[1];
        if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N && !RBvisited[next_x][next_y] && color.includes(picture[next_x][next_y])){
          willVisit.push([next_x,next_y]);
          RBvisited[next_x][next_y] = true;
        }
      }
    }
  }
}
let RGB = 0;
let RB = 0;

for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    if(!RGBvisited[i][j]){
      BFS(i,j,picture[i][j],true);
      RGB++;
    }
    if(!RBvisited[i][j]){
      BFS(i,j,picture[i][j],false)
      RB++;
    }
  }
}

console.log(RGB,RB);