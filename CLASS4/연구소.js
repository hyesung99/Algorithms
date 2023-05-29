const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const map = [];
const walls = [];
const starts = [];
const moves = [[1,0],[-1,0],[0,1],[0,-1]];

for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    if(map[i][j] === 0) {
      walls.push([i,j]);
    }
    else if(map[i][j] === 2){
      starts.push([i,j]);
    }
  }
}

const BFS = (copyMap, wall1, wall2, wall3) => {
  const willVisit = [...starts];
  copyMap[wall1[0]][wall1[1]] = 1;
  copyMap[wall2[0]][wall2[1]] = 1;
  copyMap[wall3[0]][wall3[1]] = 1;

  while(willVisit.length !== 0){
    let [x,y] = willVisit.shift();
    copyMap[x][y] = 2;
    for(let move of moves){
      let next_x = x + move[0];
      let next_y = y + move[1];

      if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < M && copyMap[next_x][next_y] === 0){
        willVisit.push([next_x,next_y]);
      }
    }
  }
  return copyMap.flat().filter((item) => item === 0).length
}

let answer = 0;
const wall_length = walls.length;
for(let i=0; i<wall_length; i++){
  for(let j=i+1; j<wall_length; j++){
    for(let k=j+1; k<wall_length; k++){
      let wall1 = walls[i];
      let wall2 = walls[j];
      let wall3 = walls[k];
      let copyMap = JSON.parse(JSON.stringify(map));
      let safeZone = BFS(copyMap,wall1,wall2,wall3)
      // console.log(safeZone);
      if(answer < safeZone){
        answer = safeZone;
        // console.log(copyMap);
      }
    }
  }
}
console.log(answer);