const [top,start,end,up,down] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(Number);

const willVisit = [[start,0]];
const visited = Array(top+1).fill(false);
let answer = 'use the stairs';

while(willVisit.length !==  0){
  let [curr,height] = willVisit.shift();

  if(curr === end){
    answer = height;
    break;
  }

  if(visited[curr] === false){
    visited[curr] = true;
    // console.log(visited);
    let next_up = curr + up;
    let next_down = curr - down;

    if(next_up <= top && !visited[next_up]){
      willVisit.push([next_up,height+1]);
    }
    if(next_down > 0 && !visited[next_down]){
      willVisit.push([next_down,height+1]);
    }
  }
}

console.log(answer);