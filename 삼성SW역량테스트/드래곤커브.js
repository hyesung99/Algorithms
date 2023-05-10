const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const map = Array.from({ length:101 }, () => new Array(101).fill(0));
const moves = [[1,0],[0,-1],[-1,0],[0,1]];

const rotate = (path) => {
  let rotated_path = path.map((edge) => (edge+1) % 4)
  return rotated_path;
}

for(let i=0; i<N; i++){
  let [x,y,direction,generation] = input.shift().split(' ').map(Number);
  let path = [direction]
  map[y][x] = 1;
  for(let j=0; j<generation; j++){
    path = [...path,...rotate(path).reverse()];
  }
  
  for(let move of path){
    x = x + moves[move][0]
    y = y + moves[move][1]
    if(x < 0 || y < 0 || x > 100 || y > 100) break;
    map[y][x] = 1;
  }
}
let answer = 0;
for(let p=1; p<101; p++){
  for(let q=1; q<101; q++){
    if(map[p-1][q-1] === 1 && map[p-1][q] === 1 && map[p][q-1] === 1 && map[p][q] === 1){
      answer++;
    }
  }
}
console.log(answer);
