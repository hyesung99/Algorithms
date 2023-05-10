const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const map = [];
const [vertical,horizontal,diagonal] = ['vertical','horizontal','diagonal'];
for(let i=0; i<N; i++){
  map.push(input.shift().trim().split(' ').map(Number));
}

let answer = 0;
const willVisit = [[0,1,horizontal]];
let num = 0;
while(willVisit.length > num){
  if(map[N-1][N-1] === 1){
    console.log(0);
    break;
  }
  let next_x,next_y;
  let [curr_x,curr_y,state] = willVisit[num++];
  if(curr_x === N-1 && curr_y === N-1){
    answer++;
  }
  if(state === horizontal){  
    next_x = curr_x;
    next_y = curr_y + 1;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0){
      willVisit.push([next_x,next_y,horizontal]);
    }
    next_x = curr_x + 1;
    next_y = curr_y + 1;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0 && map[next_x-1][next_y] === 0 && map[next_x][next_y-1] === 0){
      willVisit.push([next_x,next_y,diagonal]);
    }
  }
  else if(state === diagonal){
    next_x = curr_x;
    next_y = curr_y + 1;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0){
      willVisit.push([next_x,next_y,horizontal]);
    }
    next_x = curr_x + 1;
    next_y = curr_y + 1;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0 && map[next_x-1][next_y] === 0 && map[next_x][next_y-1] === 0){
      willVisit.push([next_x,next_y,diagonal]);
    }
    next_x = curr_x + 1;
    next_y = curr_y;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0){
      willVisit.push([next_x,next_y,vertical]);
    }
  }
  else{
    next_x = curr_x + 1;
    next_y = curr_y;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0){
      willVisit.push([next_x,next_y,vertical]);
    }
    next_x = curr_x + 1;
    next_y = curr_y + 1;
    if(next_x < N && next_y < N && map[next_x][next_y] === 0 && map[next_x-1][next_y] === 0 && map[next_x][next_y-1] === 0){
      willVisit.push([next_x,next_y,diagonal]);
    }
  }
}

console.log(answer);