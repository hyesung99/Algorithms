const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [M,N,H] = input.shift().trim().split(' ').map(Number);
const map = [];
const d = [[0,0,-1],[0,0,1],[0,-1,0],[0,1,0],[-1,0,0],[1,0,0]];
const startList = [];
let answer = 0
let tomato = 0;
for(let i=0; i<H; i++){
  let floor = [];
  for(let j=0; j<N; j++){
    floor.push(input.shift().split(' ').map(Number));
  }
  map.push(floor);
}
// console.log(map);
for(let z=0; z<H; z++){
  for(let y=0; y<N; y++){
    for(let x=0; x<M; x++){
      if(map[z][y][x] === 1){
        startList.push([z,y,x]);
        tomato++;
      }
    }
  }
}
const willVisit = [];

for(let tmp of startList){
  willVisit.push([...tmp,0]);
}
// console.log(willVisit);

let num = 0;
while(willVisit.length > num){
  let [z,y,x,height] = willVisit[num];
  // console.log(map, height);
  num++;

  answer = height;
  
  for(let move of d){
    let next_z = z + move[0];
    let next_y = y + move[1];
    let next_x = x + move[2];

    if(next_x >= 0 && next_y >= 0 && next_z >=0 && next_x < M && next_y < N && next_z < H && map[next_z][next_y][next_x] === 0 ){
      willVisit.push([next_z,next_y,next_x,height+1]);
      map[next_z][next_y][next_x] = 1;
    }
  }
}


outerLoop: for(let z=0; z<H; z++){
  for(let y=0; y<N; y++){
    for(let x=0; x<M; x++){
      if(tomato === 0){
        answer = -1;
        break outerLoop;
      }
      if(map[z][y][x] === 0){
        answer = -1
        break outerLoop;
      }
    }
  }
}

console.log(answer);