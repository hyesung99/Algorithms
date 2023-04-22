input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const n = input.shift();
const triangle = [];
const dp = Array.from({length:n} , () => new Array(n).fill(0));

for(let i=0; i<n; i++){
  triangle.push(input.shift().split(' ').map(Number));
}

dp[0][0] = triangle[0][0];

for(let i=1; i<n; i++){
  for(let j=0; j<=i; j++){
    
    if(j === 0){
      dp[i][j] = dp[i-1][j] + triangle[i][j]
    }
    else if(j === i){
      dp[i][j] = dp[i-1][j-1] + triangle[i][j]
    }
    else{
      dp[i][j] = Math.max(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j]
    }
  }
}

console.log(Math.max(...dp[n-1]));