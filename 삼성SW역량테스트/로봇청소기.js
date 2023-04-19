const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const [start_x,start_y,start_d] = input.shift().split(' ').map(Number);
const map = [];
const north = [-1,0];
const east = [0,1];
const south = [1,0];
const west = [0,-1]
const direction = [north,east,south,west]

for (let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

const willVisit = [[start_x,start_y,start_d]];
let answer = 0;
while(willVisit.length !== 0){
  let [curr_x,curr_y,curr_d] = willVisit.shift();
  let no_next = true;
  if(map[curr_x][curr_y] === 0){
    answer++;
    map[curr_x][curr_y] = -answer
  }
  for(let j=3; j>=0; j--){
    let next_d = (curr_d+j+4)%4
    let next_x = curr_x + direction[next_d][0];
    let next_y = curr_y + direction[next_d][1];
    if(next_x >=0 && next_y >= 0 && next_x < N && next_y < M && map[next_x][next_y] === 0){
      willVisit.push([next_x,next_y,next_d]);
      no_next = false;
      break;
    }
  }
  if(no_next){
    let back_x = curr_x-direction[curr_d][0];
    let back_y = curr_y-direction[curr_d][1];
    if(map[back_x][back_y] === 1){
      break;
    }
    willVisit.push([back_x,back_y,curr_d]);
  }
  
}
// console.log(map);
console.log(answer);