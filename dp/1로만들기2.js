const N = Number(require('fs').readFileSync("input.txt").toString().trim())
const visited = new Array(N+1).fill(-1);
const dp = new Array(N+1).fill(0);

for(let i=2; i<N+1; i++){

  dp[i] = dp[i-1] + 1;
  visited[i] = i-1;

  if(i%2 === 0 && dp[i/2] + 1 < dp[i]){
    dp[i] = dp[i/2] + 1;
    visited[i] = i/2;
  }
  
  if(i%3 === 0 && dp[i/3]+1 < dp[i]){
    dp[i] = dp[i/3] + 1;
    visited[i] = i/3;
  }
}

console.log(dp[N]);
console.log(visited);