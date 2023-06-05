const input = require('fs').readFileSync('input.txt').toString().split('\n');
const map = [];
for(let i=0; i<input.length; i++){
  map.push(input[i].trim().split(''));
}
const moves = [[1,0],[-1,0],[0,-1],[0,1]];
const rows = 12;
const cols = 6;

// 1. map 순회 4개이상 발견 -> .으로 바꿈 / answer + 1
// 2. map순회 => .이면 위 row요소 아래로 당김
// 3. continue 1

const bfs = (color,start_x,start_y) => {
  const willVisit = [[start_x,start_y]];
  const visited = Array.from({length:rows} , () => new Array(cols).fill(false));
  const breaks = [];
  while(willVisit.length !== 0){

    let [curr_x,curr_y] = willVisit.shift();
    for(let move of moves){
      let next_x = curr_x + move[0];
      let next_y = curr_y + move[1];

      if(next_x >= 0 && next_y >= 0 && next_x < rows && next_y < cols && map[next_x][next_y] === color && !visited[next_x][next_y]){
        visited[next_x][next_y] = true;
        breaks.push([next_x,next_y]);
        willVisit.push([next_x,next_y]);
      }
    }
  }
  if(breaks.length >= 4){
    for(const b of breaks){
      map[b[0]][b[1]] = '.'
    }
    return breaks;
  }
  return [];
}
let answer = 0;
while(true){
  let breaks = []
  flag = false;
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(map[i][j] !== '.'){
        breaks = [...breaks ,...bfs(map[i][j],i,j)];
      }
    }
  }
  for(let i=0; i<rows; i++){
    
    for(let j=0; j<cols; j++){
   
    }
  }
  console.log(breaks);
  if(breaks.length === 0) break;
  console.log(map);
  answer++;
}
console.log(answer);