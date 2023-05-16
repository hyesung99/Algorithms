const input = require('fs').readFileSync('input.txt').toString().split('\n')
const [N,L,R] = input.shift().split(' ').map(Number);
const moves = [[1,0],[-1,0],[0,1],[0,-1]];
const map = [];
for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}
console.log(N,L,R);
console.log(map);
const bfs = (start_x,start_y,visited) => {
  let willVisit = [[start_x,start_y]];
  let visited_area = [[start_x,start_y]];
  visited[start_x][start_y] = true;
  let population = 0;
  while(willVisit.length !== 0){
    let [curr_x,curr_y] = willVisit.shift();
    for(let move of moves){
      let next_x = curr_x + move[0];
      let next_y = curr_y + move[1];
      if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < N && !visited[next_x][next_y]){
        const difference = Math.abs(map[curr_x][curr_y] - map[next_x][next_y]);
        if (difference >= L && difference <= R) {
          visited[next_x][next_y] = true;
          visited_area.push([next_x,next_y]);
          willVisit.push([next_x,next_y]);
          population += map[next_x][next_y];
        }
      }
    }
  }

  visited_area.forEach(([x,y]) => {
    map[x][y] = Math.floor(population / visited_area.length);
  });
  return visited_area.length;
}
answer = 0;
while (true) {
  // 방문 배열과 isUnionFormed를 초기화
  let visited = Array.from(Array(N), () => Array(N).fill(false));
  let isUnionFormed = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        const unionCount = bfs(i, j, visited);
        // 이번 턴에서 연합이 한 개라도 생겼다면 true로 변경
        if (unionCount > 1) isUnionFormed = true;
      }
    }
  }

  // for문을 다 돌아도 연합이 한번도 생기지 않았다면 while문 빠져나가기
  if (!isUnionFormed) break;
  answer++;
}
console.log(map);
console.log(answer);