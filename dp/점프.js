const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const map = [];
const dp = Array.from({ length:N }, () => new Array(N).fill(0));

for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}


for(let p=0; p<N; p++){
  for(let q=0; q<N; q++){
    if(p+map[p][q] < N){
      dp[p+map[p][q]][q] = dp[p][q] + 1;
    }
    if(q+map[p][q] < N){
      dp[p][q+map[p][q]] = dp[p][q] + 1; 
    }
  }
}

console.log(dp[N-1][N-1]);
console.log(dp);