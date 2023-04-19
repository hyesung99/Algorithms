const input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);
let dp;
input.shift();
for(let n of input){
  dp = new Array(n+1);

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for(let i=4; i<=n; i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]; 
  }

  console.log(dp[n]);
}