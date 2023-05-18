const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = Number(input.shift());
const schedule = [];
const dp = new Array(N).fill(0);

for(let i=0; i<N; i++){
  schedule.push(input.shift().split(' ').map(Number));
}

for(let i=0; i<N; i++){
  const [duration, profit] = schedule[i];
  if(i+duration > N) continue;
  dp[i] += profit;
  for(let j=i+duration; j<N; j++){
    dp[j] = Math.max(dp[j], dp[i]);
  }
}
console.log(Math.max(...dp));