const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const city = [];
const house = [];
const chicken = [];

for(let i=0; i<N; i++){
  city.push(input.shift().split(' ').map(Number));
  for(let j=0; j<N; j++){
    if(city[i][j] === 1) house.push([i,j]);
    else if(city[i][j] === 2) chicken.push([i,j]);
  }
}
// console.log('house',house);
// console.log('chicken',chicken);


arr = [];
let answer = Infinity;
const back = (num,cnt) => {
  if(num>chicken.length){
    return;
  }
  if(cnt === M){
    let total_check = 0;
    for(let [hx,hy] of house){
      let min_check = Infinity;
      for(let idx of arr){
        let [cx,cy] = chicken[idx];
        min_check = Math.min(min_check, Math.abs(hx-cx) + Math.abs(hy-cy));
      }
      total_check+=min_check;
    }
    answer = Math.min(answer,total_check);
    return;
  }
  arr.push(num);
  back(num+1,cnt+1);
  arr.pop();
  back(num+1,cnt);
}
back(0,0);
console.log(answer);