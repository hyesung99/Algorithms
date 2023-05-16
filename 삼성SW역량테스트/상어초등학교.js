const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift())
const prefers = [];
const map = Array.from({length:N}, () => new Array(N).fill(0));
const moves = [[1,0],[-1,0],[0,1],[0,-1]];
const DIRECTION = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];
for(let i=0; i<N**2; i++){
  prefers.push(input.shift().split(' ').map(Number));
}
const prefers_copy = [...prefers];
answer = 0;
for(let prefer of prefers){
  let [shark] = prefer.splice(0,1);
  let max = 0;
  let candidate = [];
  for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
      if(map[i][j] !== 0) continue;
      let curr_prefer = 0;
      let curr_empty = 0;
      for(let move of moves){
        let next_x = i+move[0];
        let next_y = j+move[1];

        if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N){
          if(prefer.includes(map[next_x][next_y])) curr_prefer++;
          if(map[next_x][next_y] === 0) curr_empty++;
        }
      }
      if(max < curr_prefer){
        max = curr_prefer;
        candidate = [];
      } 
      if (max === curr_prefer){
        candidate.push([curr_empty,i,j]);
      }
    }
  }
  candidate.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    } else if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[2] - b[2]; 
    }
  });
  map[candidate[0][1]][candidate[0][2]] = shark;
}

asnwer = 0;
console.log(map);
for(let i=0; i<N; i++){
  for(let j=0; j<N; j++){
    for(let prefer_copy of prefers_copy){
      let curr_prefer = 0;
      if(prefer_copy[0] !== map[i][j])continue;
      
      for(let move of moves){
        let next_x = i+move[0];
        let next_y = j+move[1];

        if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N){
          if(prefer_copy.slice(1,5).includes(map[next_x][next_y])) curr_prefer++;
        }
      }
      console.log(curr_prefer);
      if(curr_prefer === 0) answer += 0;
      if(curr_prefer === 1) answer += 1;
      if(curr_prefer === 2) answer += 2;
      if(curr_prefer === 3) answer += 100;
      if(curr_prefer === 4) answer += 1000;
      break;
    }
  }
}

console.log(answer);