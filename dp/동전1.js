const input = require('fs').readFileSync("input.txt").toString().trim().split('\n');

const[n,k] = input.shift().split(' ').map(Number);
coins = [];
dp = new Array(k+1).fill(0);
for(let i=0; i<n; i++){
  coins.push(Number(input.shift()));
};

dp[0] = 1;

for(coin of coins){
  for(let j=coin; j<=k; j++){
    if(j-coin >=0){
      dp[j] += dp[j-coin]
    }
  }
}
console.log(dp[k]);