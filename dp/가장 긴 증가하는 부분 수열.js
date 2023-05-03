const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const array = input.shift().split(' ').map(Number);
const dp = new Array(N).fill(0);

dp[0] = array[0];


for(let i=0; i<N; i++){
  let pivot_index = 0;
  let pivot = -1;
  for(let j=0; j<=i; j++){
    if(array[j] < array[i] && dp[j] > pivot){
      pivot = dp[j];
      pivot_index = j;
    }
  }
  if(pivot === -1){
    dp[i] = 1;
  } else {
    dp[i] = dp[pivot_index] + 1;
  }
}

console.log(Math.max(...dp));