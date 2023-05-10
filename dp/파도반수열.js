const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const testCases = [];


for(let i=0; i<N; i++){
  testCases.push(Number(input.shift()));
}
let max = Math.max(...testCases);

const dp = new Array(101).fill(0);

dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2; 
dp[5] = 2;

for(let i=6; i<max+1; i++){
  dp[i] = dp[i-5] + dp[i-1];
}

for(let testCase of testCases){
  console.log(dp[testCase]);
}