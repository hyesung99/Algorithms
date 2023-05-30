const [start, end] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(Number);
const visited = Array(100001).fill(false);
const willVisit = [];

willVisit.push([start,0])
let num = 0;
while(willVisit.length > num){
  let [curr,time] = willVisit[num];
  num++;
  if(visited[curr]) continue;
  if(curr === end){
    console.log(time);
    break;
  }
  if(curr + 1 <= 100000){
    willVisit.push([curr+1,time+1]);
  }
  if(curr - 1 >= 0){
    willVisit.push([curr-1,time+1]);
  }
  if(curr * 2 <= 100000 && curr !== 0){
    willVisit.push([curr*2,time+1]);
  }    
  visited[curr] = true;
}