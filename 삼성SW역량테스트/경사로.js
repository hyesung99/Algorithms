const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,L] = input.shift().split(' ').map(Number);
let map = [];
for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

function transposeArray(array) {
  const rows = array.length;
  const cols = array[0].length;

  // 빈 2차원 배열 생성
  const transposedArray = Array.from({ length: cols }, () => []);

  // 열과 행을 뒤집어서 값을 할당
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      transposedArray[i][j] = array[j][i];
    }
  }

  return transposedArray;
}

function possible(road){
  const isSteep = new Array(N).fill(false);
  for(let i=0; i<N; i++){
    // 다음칸이 오르막일때
    if(i+1 < N && road[i]+1 === road[i+1]){
      if(i-L+1 >= 0 && isSteep.slice(i-L+1,i+1).every((item) => item === false)){
        for(let j=i-L+1; j<i+1; j++){
          isSteep[j] = true;
        }
      }else{
        return false;
      }
    }
    // 다음칸이 내리막일때
    else if(i+1 < N && road[i]-1 === road[i+1]){
      if(i+L < N && isSteep.slice(i+1,i+L+1).every((item) => item === false)){
        for(let j=i+1; j<i+L+1; j++){
          isSteep[j] = true;
        }
      }else{
        return false;
      }
    }
    // 높이가 2이상 차이
    else if(i+1 < N && (road[i]-1 > road[i+1] || road[i]+1 < road[i+1])){
      return false;
    }
  }  
  return true;
}
let answer = 0;
for(let i=0; i<N; i++){
  console.log(possible(map[i]));
  if(possible(map[i])) answer++;
}
console.log('.............')
map = transposeArray(map);
for(let i=0; i<N; i++){
  console.log(possible(map[i]));
  if(possible(map[i])) answer++;
}

console.log(answer);