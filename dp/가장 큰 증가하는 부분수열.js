const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());
const array = input.shift().split(' ').map(Number);
const dp = new Array(N);
dp[0] = array[0];

for(let i=1; i<N; i++){
  let max = 0;
  let max_index = -1;
  for(let j=0; j<i; j++){
    if(array[i] > array[j] && dp[j] > max){
      max = dp[j];
      max_index = j;
    }
  }
  if(max_index === -1){
    dp[i] = array[i];
  }else{
    dp[i] = dp[max_index] + array[i];
  }
}

console.log(Math.max(...dp));