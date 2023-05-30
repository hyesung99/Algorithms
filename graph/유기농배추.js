const cabbage = (x,y,M,N) =>{
  
  let dx = [0,0,-1,1];
  let dy = [-1,1,0,0];
  let willVisit = [];
  let visited = [];

  willVisit.push([x,y]);

  while(willVisit.length !== 0){
    let node = willVisit.pop()
    if(!visited.includes(node)){
      // console.log(node);
      visited.push(node);
      map[node[0]][node[1]] = 0;
      for(let i=0; i<4; i++){
        let next_x = node[0] + dx[i];
        let next_y = node[1] + dy[i];

        if(next_x >= 0 && next_y >= 0 && next_x < M && next_y < N && map[next_x][next_y] === 1){
          willVisit.push([next_x,next_y]);
        }
      }
    }
  }
};

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let n = Number(input.shift());

for (let i=0; i<n; i++){
  let answer = 0;
  let[M,N,K] = input.shift().split(' ').map(Number);
  var map = Array.from(Array(M), () => new Array(N).fill(0));
  
  for(let j=0; j<K; j++){
    let[x,y] = input.shift().split(' ').map(Number);
    map[x][y] = 1;
  }
  // console.log(map);
  for(let p=0; p<M; p++){
    for(let q=0; q<N; q++){
      if(map[p][q] === 1){
        // console.log("dfs start");
        cabbage(p,q,M,N);
        answer++;
      }
    }
  }
  console.log(answer);
}