
const numTestCase = Number(input.shift());

for(let i=0; i<numTestCase; i++){
  let col = Number(input.shift())
  let sticker = [];
  let dp = Array.from({length:2}, () => new Array(col));
  for(let j=0; j<2; j++){
    sticker.push(input.shift().split(' ').map(Number));
  }
  // console.log(sticker);
  dp[0][0] = sticker[0][0];
  dp[1][0] = sticker[1][0];
  dp[0][1] = sticker[0][1] + sticker[1][0];
  dp[1][1] = sticker[1][1] + sticker[0][0];
  // console.log(dp);
  for(let x=2; x<col; x++){
    dp[0][x] = Math.max(dp[1][x-2]+sticker[0][x], 
                        dp[1][x-1]+sticker[0][x]) 

    dp[1][x] = Math.max(dp[0][x-2]+sticker[1][x], 
                        dp[0][x-1]+sticker[1][x]) 
  }
  console.log(Math.max(...dp[col-1]));
}
