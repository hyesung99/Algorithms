const n = Number(require('fs').readFileSync('input.txt').toString().trim());

dp = new Array(n);

dp[0] = 1;
dp[1] = 2;

for(let i=2; i<n; i++){
  dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[n-1]%10007);