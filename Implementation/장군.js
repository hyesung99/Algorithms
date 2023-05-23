const input = require('fs').readFileSync('input.txt').toString().split('\n');
const map = Array.from({length:10}, () => new Array(10).fill(0));
const visited = Array.from({length:10}, () => new Array(10).fill(false));
const moves = [[-2,-3],[-3,-2],[-3,2],[-2,3],[2,3],[3,2],[3,-2],[2,-3]];
let answer = -1
const [start_x,start_y] = input.shift().split(' ').map(Number);
const [end_x,end_y] = input.shift().split(' ').map(Number);

const willVisit = [[start_x,start_y,0]];

while(willVisit.length !== 0){
  let [curr_x,curr_y,depth] = willVisit.shift();
  
  console.log('curr',curr_x,curr_y);
  if(curr_x === end_x && curr_y === end_y){
    answer = depth;
    break;
  }
  
  next_move : for(let move of moves){
    let next_x = curr_x + move[0];
    let next_y = curr_y + move[1];
    if(next_x >= 10 || next_y >= 10 || next_x < 0 || next_y < 0){
      continue next_move;
    }
    let x_sign = move[0]/Math.abs(move[0]);
    let y_sign = move[1]/Math.abs(move[1]);
    console.log('sign',x_sign,y_sign);
    console.log('next',next_x,next_y)
    for(let i=1; i<3; i++){
      if(next_x-(x_sign * i) === end_x && next_y-(y_sign*i) === end_y){
        console.log('check',next_x-(x_sign * i),next_y-(y_sign*i))
        continue next_move
      }
    }
    if(!visited[next_x][next_y]){
      willVisit.push([next_x,next_y,depth+1]);
      visited[next_x][next_y] = true;
    }
  }
}

console.log(answer);