const input = require('fs').readFileSync("input.txt").toString().trim().split('\n').map(Number);
const N = input.shift();
const stairs = input;

const dp = new Array(N);
dp[0] = stairs[0];
dp[1] = stairs[1] + stairs[0];
dp[2] = Math.max(stairs[1]+stairs[2], stairs[0]+stairs[2]);

for(let i=3; i<N; i++){
  dp[i] = Math.max(stairs[i]+dp[i-2], stairs[i]+stairs[i-1]+dp[i-3]);
}

console.log(dp[N-1])