const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
const maze = input.map((row) => row.split('').map(Number));

const BFS = (N,M,maze) => {

  visited = {};
  willVisit = [[0,0]];
  let dx = [0,0,1,-1];
  let dy = [1,-1,0,0];
  visited[[0,0]] = 1;

  while(willVisit.length !== 0){
    
    node = willVisit.shift();    
    for(let i=0; i<4; i++){
      let nx = node[0] + dx[i];
      let ny = node[1] + dy[i];
      if( nx >= 0 && ny >= 0 && nx < N && ny < M && maze[nx][ny] === 1 && !visited[[nx,ny]]){
        visited[[nx,ny]] = visited[node] + 1
        willVisit.push([nx,ny]);
      }
    }
  }
  return(visited[[N-1,M-1]]);
}

console.log(BFS(N,M,maze));