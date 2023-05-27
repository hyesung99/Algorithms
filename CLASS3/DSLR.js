const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const times = Number(input.shift());
const answer = [];

for(let time=0; time<times; time++){
  let [A,B] = input.shift().split(' ').map(Number);
  
  const willVisit = [[A,'']];
  const visited = new Array(10000).fill(false);
  visited[A] = true;
  while(willVisit.length !== 0){
    let [n,path] = willVisit.shift();

    if(n === B){
      answer.push(path);
      break;
    }

    const nextD = (n * 2) % 10000;
    const nextS = n === 0 ? 9999 : n - 1;
    const nextL = (n % 1000) * 10 + Math.floor(n / 1000);
    const nextR = (n % 10) * 1000 + Math.floor(n / 10);

    if(!visited[nextD]){
      willVisit.push([nextD,path+'D']);
      visited[nextD] = true;
    }
    if(!visited[nextS]){
      willVisit.push([nextS,path+'S']);
      visited[nextS];
    }
    if(!visited[nextL]){
      willVisit.push([nextL,path+'L'])  ;
      visited[nextL];
    }
    if(!visited[nextR]){
      willVisit.push([nextR,path+'R']);
      visited[nextR];
    }
  }
}

console.log(answer.join("\n"));