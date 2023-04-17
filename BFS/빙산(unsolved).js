input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = [];
let dx = [0,0,-1,1];
let dy = [-1,1,0,0];

for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

let day = 1;
let test = 2;

const dfs = () => {
  while(true){
    
    let visited = Array.from({length : N}, () => Array.from({length : M}).fill(false));
    console.log(visited);
    let willVisit = [];
    let start_x;
    let start_y;
    for(let p=0; p<N; p++){
      for(let q=0; q<M; q++){
        if(map[p][q] > 0){
          start_x = p;
          start_y = q;
          break;
        }
      }
      if(start_x === p){
        // console.log('start', start_x, start_y);
        break;
      }
    }
    
    let visited_cnt = map.flat().filter(ice => ice > 0).length;
    willVisit.push([start_x,start_y]);

    while(willVisit.length !== 0){
      let node = willVisit.shift();
      
      if(!visited[node[0]][node[1]]){
        
        visited[node[0]][node[1]] = true;
        let edge = 0;
        for(let j=0; j<4; j++){
          let next_x = node[0] + dx[j];
          let next_y = node[1] + dy[j];

          if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < M){
            if(map[next_x][next_y] <= 0 && map[next_x][next_y] > -day){
              edge++;
            } else if (map[next_x][next_y] > 0){
              willVisit.push([next_x,next_y])
            }
          }
        }
        map[node[0]][node[1]] = map[node[0]][node[1]] - edge;
        if(map[node[0]][node[1]] <= 0){
          map[node[0]][node[1]] = -day;
        }
        
      }
    }
    
    if(visited_cnt !== visited.flat().filter(bool => bool === true).length){
      return(day-1);
    }
    day++;

  }
}

console.log(dfs());