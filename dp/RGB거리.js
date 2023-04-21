const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());

const map = [];
const dp = Array.from({length:N} , () => new Array(3).fill(0));
for(let j=0; j<N; j++){
  map.push(input.shift().split(' ').map(Number));
}

[dp[0][0],dp[0][1],dp[0][2]] = map[0];

for(let i=1; i<N; i++){
  dp[i][0] = Math.min(dp[i-1][1] , dp[i-1][2]) + map[i][0];
  dp[i][1] = Math.min(dp[i-1][0] , dp[i-1][2]) + map[i][1];
  dp[i][2] = Math.min(dp[i-1][0] , dp[i-1][1]) + map[i][2];
}
console.log(Math.min(...dp[N-1]));