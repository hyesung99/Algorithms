const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [row, col] = input.shift().split(' ').map(Number);
const map = [];
input.map((item) => map.push(item.trim().split(' ')))

const moves = [[1,0],[-1,0],[0,1],[0,-1]];

const air = () => {
  const willVisit = [[0,0]];
  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  const melt = [];
  while(willVisit.length !== 0){
    let [curr_x,curr_y] = willVisit.shift();
    for(let move of moves){
      let next_x = curr_x + move[0];
      let next_y = curr_y + move[1];
      if(next_x >= 0 && next_y >= 0 &&  next_x < row && next_y < col && map[next_x][next_y] === '0' && !visited[next_x][next_y]){
        willVisit.push([next_x,next_y]);
        visited[next_x][next_y] = true;
      }
      if(next_x >= 0 && next_y >= 0 &&  next_x < row && next_y < col && map[next_x][next_y] === '1' && !visited[next_x][next_y]){
        melt.push([next_x,next_y]);
        visited[next_x][next_y] = true;
      }
    }
  }
  let melted_cheese = melt.length;
  for(let m of melt){
    map[m[0]][m[1]] = '0';
  }
  return melted_cheese;
}


let melted_cheese = 1;
let answer = [];
let time = 0;
while(melted_cheese !== 0){
  melted_cheese = air();
  answer.push(melted_cheese);
  time++;
}
console.log(answer.length-1);
console.log(answer[answer.length-2]);