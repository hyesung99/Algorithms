const input = require('fs').readFileSync('input.txt').toString().trim().split('\n').map(Number);

const num = input.shift();

for(let i=0; i<num; i++){

  let k = input.shift();
  let n = input.shift();
  let dp = Array.from({length:k+1} , () => new Array(n));

  for(let j=0; j<n; j++){
    dp[0][j] = j+1;
  }

  for(let p=1; p<k+1; p++){
    for(let q=0; q<n; q++){
      if(q-1 >= 0){
        dp[p][q] = dp[p][q-1] + dp[p-1][q];
      }else{
        dp[p][q] = dp[p-1][q];
      }
    }
  }
  // console.log(dp);
  console.log(dp[k][n-1]);
}