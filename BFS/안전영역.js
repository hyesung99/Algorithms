const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const map = [];
const d = [[-1,0],[1,0],[0,-1],[0,1]];
for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

// console.log(map);

const bfs = (start_x,start_y, rain) => {
  let willVisit = [[start_x,start_y]];
  while(willVisit.length !== 0){
    let [curr_x,curr_y] = willVisit.shift();
    if(!visited[curr_x][curr_y]){
      
      visited[curr_x][curr_y] = true;
      for(move of d){
        let next_x = curr_x + move[0];
        let next_y = curr_y + move[1];
        if(next_x >=0 && next_y >=0 && next_x < N && next_y < N && map[next_x][next_y] > rain){
          willVisit.push([next_x,next_y])
        }
      }
    }
  }
}
let top = Math.max(...map.flat());

let visited;
let max_area = 0;
let curr_area = 0;
for(let rain=0; rain<top; rain++){
  visited = Array.from({ length: N }, () => new Array(N).fill(false));
  curr_area = 0;
  for(let p=0; p<N; p++){
    for(let q=0; q<N; q++){
      if(map[p][q] > rain && !visited[p][q]){
        bfs(p,q,rain);
        curr_area++;
      }
    }
  }
  // console.log(rain);
  // console.log(visited);
  if(curr_area > max_area){
    max_area = curr_area;
  }
}

console.log(max_area);