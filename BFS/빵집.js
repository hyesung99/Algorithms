input = require('fs').readFileSync("input.txt").toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const map = [];
for(let i=0; i<N; i++){
  map.push(input.shift().trim().split(''));
}
let result = 0;
const dx = [1,0,-1];
const dy = [1,1,1];
let visited = Array.from({ length: N }, () => new Array(M).fill(false));

for(let j=0; j<N; j++){
  let willVisit = [[j,0]];
  
  while(willVisit.length !== 0){

    let node = willVisit.pop();

    let x = node[0];
    let y = node[1];
    
    if(y === M-1){
      result++;
      break;
    }
    
    if(!visited[x][y]){
      visited[x][y] = true;      
      // console.log([x,y]);

      for(let k=0; k<3; k++){
        let next_x = x + dx[k];
        let next_y = y + dy[k];

        if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < M && map[next_x][next_y] === '.'){
          willVisit.push([next_x,next_y]);
        }
      }
    }
  }
  // console.log(visited);
}

console.log(result);
