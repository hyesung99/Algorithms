const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [n,m] = input.shift().split(' ').map(Number);
const dp = new Array(n).fill(Infinity);
const names = [];
for(let i=0; i<n; i++){
  names.push(Number(input.shift()));
}

const solution = (idx) => {
  if(dp[idx] !== Infinity){
    return dp[idx];
  }

  let remain = m - names[idx];

  for(let i=idx+1; i<=n && remain >= 0;i++){
    if(i === n){
      dp[idx] = 0;
      break;
    }
    dp[idx] = Math.min(dp[idx], remain*remain + solution(i));
    remain -= names[i] + 1;
  }
  return dp[idx];
}
solution(0);
console.log(dp);