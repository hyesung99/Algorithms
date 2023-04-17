const input = require('fs').readFileSync('input.txt').toString().toString().trim().split('\n');
const [N, M] = input.shift().split(' ');
const map = Array.from({ length: 100 }).fill(0);


for(let k=0; k<100; k++){
  map[k] = k;
}

for (let i=0; i<N; i++){
  let [start_ledder,end_ledder] = input.shift().split(' ').map(Number);
  map[start_ledder-1] = end_ledder-1;
}
for (let j=0; j<M; j++){
  let [start_snake,end_snake] = input.shift().split(' ').map(Number);
  map[start_snake-1] = end_snake-1;
}

const bfs = (start) => {
  const willVisit = [];
  const visited = Array.from({ length: 100 }).fill(true);

  willVisit.push([start,0]);

  while(willVisit.length !== 0){
    // console.log(willVisit);
    let [curr,height] = willVisit.shift();

    if(curr === 99){
      console.log(height);
      break;
    }
    if(!visited.includes(curr)){
      // console.log(curr);
      visited.push(curr);
      for(let l=1; l<7; l++){
        if(curr + l < 100){
          let next = map[curr + l];      
          willVisit.push([next,height+1]);
        }
      }
    }
  }
}
bfs(0);


// console.log(map);