const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const map = [];
const directions = [[1,0],[-1,0],[0,1],[0,-1]];
for(let i=0; i<N; i++){
  map.push(input.shift().trim().split(''));
}

console.log(map);
const tilt = (direction, curr_x,curr_y) => {
  let next_x = curr_x;
  let next_y = curr_y;
  while(map[curr_x+direction[0]][curr_y+direction[1]] !== '#' && map[curr_x+direction[0]][curr_y+direction[1]] !== 'B'){
    next_x += direction[0];
    next_y += direction[1];
  }
  return next_x,next_y
}

let blue;
let red;
let hole;
for(let p=1; p<N-1; p++){
  for(let q=1; q<M-1; q++){
    if(map[p][q] === 'B'){
      blue = [p,q];
    }
    else if(map[p][q] === 'R'){
      red = [p,q];
    }
    else if(map[p][q] === 'O'){
      hole = [p,q];
    }
  }
}
//x,y,height,prev_direction
const willVisit = [[red[0],red[1],blue[0],blue[1],0,-1]];

while(willVisit.length !== 0){
  let[red_x,red_y,blue_x,blue_y,height,prev_direction_x,prev_direction_y] = willVisit.shift();
  
}

