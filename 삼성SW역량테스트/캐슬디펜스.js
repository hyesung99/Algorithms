const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const moves = [[0,-1],[-1,0],[0,1]];
const [N,M,RANGE] = input.shift().split(' ').map(Number);
const map = [];
let amount_monster = 0;
let kill_counts = [];

for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

const archers = [[0,2,4]];
for(let i=0; i<M; i++){
  for(let j=i+1; j<M; j++){
    for(let k=j+1; k<M; k++){
      archers.push([i,j,k]);
    }
  }
}

let last_monster_height = 0;
for(let p=0; p<N; p++){
  for(let q=0; q<M; q++){
    if(map[p][q] === 1){
      amount_monster++;
      if(last_monster_height === 0){
        last_monster_height = N-p
      }
    }
  }
}

const find_mosnter = (x,y,copy_map) => {
  let willVisit = [[x,y,1]];

  while(willVisit.length !== 0){
    let[curr_x,curr_y,distance] = willVisit.shift()
    if(copy_map[curr_x][curr_y] === 1){
      return [curr_x,curr_y];
    }
    else{
      for(let move=0; move<moves.length; move++){
        let next_x = curr_x + moves[move][0];
        let next_y = curr_y + moves[move][1];
          
        if(distance < RANGE && next_x >= 0 && next_y >=0 && next_x < N && next_y < M){
          willVisit.push([next_x,next_y,distance+1]);        
        }
      }
    }
  }
}

const kill_monster = (archer1,archer2,archer3,copy_map) => {
  let archer1_find_monster = find_mosnter(N-1,archer1,copy_map);
  let archer2_find_monster = find_mosnter(N-1,archer2,copy_map);
  let archer3_find_monster = find_mosnter(N-1,archer3,copy_map);
  if(archer1_find_monster) copy_map[archer1_find_monster[0]][archer1_find_monster[1]] = 0
  if(archer2_find_monster) copy_map[archer2_find_monster[0]][archer2_find_monster[1]] = 0
  if(archer3_find_monster) copy_map[archer3_find_monster[0]][archer3_find_monster[1]] = 0
}


for(let archer of archers){
  let[archer1, archer2, archer3] = archer;
  let copy_map = map.map((arr) => arr.slice())
  let miss_monster = 0;
  for(let time=0; time<last_monster_height; time++){
    kill_monster(archer1, archer2, archer3,copy_map);

    for(let i=0; i<copy_map[N-1].length; i++){
      if(copy_map[N-1][i] === 1){
        copy_map[N-1][i] = 0;
        miss_monster++;
      }
    }

    for(let i=N-1; i>0; i--){
      for(let j=0; j<M; j++){
        if(copy_map[i-1][j] === 1){
          copy_map[i][j] = 1;
          copy_map[i-1][j] = 0;
        }
      }
    }
  }
  kill_counts.push(amount_monster - miss_monster);
}
console.log(Math.max(...kill_counts));