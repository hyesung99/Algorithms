const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [M,N] = input.shift().split(' ').map(Number);
const map = [];
const dx = [0,0,-1,1];
const dy = [-1,1,0,0];

for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

const bfs = (startNodes) => {
  let willVisit = [];
  for(let l=0; l<startNodes.length; l++){
    willVisit.push(startNodes[l]);
  }

  let number = 0;
  while(willVisit.length > number){
    let node = willVisit[number];
    number++;

    for(let j=0; j<4; j++){
      let next_x = node[0] + dx[j];
      let next_y = node[1] + dy[j];
      if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < M && map[next_x][next_y] === 0){
        map[next_x][next_y] = map[node[0]][node[1]] + 1;
        willVisit.push([next_x,next_y]);
      }
    }
  }

  for(let p=0; p<N; p++){
    if(map[p].includes(0)){
      return -1;
    }
  }
  
  return (Math.max(...map.flat())-1);
}

const startNodes = [];

for(let p=0; p<N; p++){
  for(let q=0; q<M; q++){
    if(map[p][q] === 1){
      startNodes.push([p,q]);
    }
  }
}

console.log(bfs(startNodes));
