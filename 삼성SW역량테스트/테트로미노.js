const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const map = [];
const moves = [[1,0],[-1,0],[0,1],[0,-1]];

for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

const dfs = (start_x,start_y) => {
  const willVisit = [[start_x,start_y,map[start_x][start_y],0,0,1]];
  let max = 0;
  while(willVisit.length !== 0){
    let [curr_x,curr_y,sum,prev_x,prev_y,block] = willVisit.pop();
    
    if(sum > max){
      max = sum;
    }
    // console.log(curr_x,curr_y,'sum',sum,'curr amt:',map[curr_x][curr_y], max, 'block:',block);

    if(block === 4){
      continue;
    }
    //ㅗ모양 처리
    else if(block === 2){
      //가로
      if(prev_x === curr_x && curr_x-1 >= 0 && curr_x+1 < N){
        if(sum+map[curr_x-1][curr_y]+map[curr_x+1][curr_y] > max){
          max = sum+map[curr_x-1][curr_y]+map[curr_x+1][curr_y];
        }
      }else if( prev_y === curr_y && curr_y-1 >= 0 && curr_y+1 < M){
        if(sum+map[curr_x][curr_y-1]+map[curr_x][curr_y+1] > max){
          max = sum+map[curr_x][curr_y-1]+map[curr_x][curr_y+1];
        }
      }
    }

    for(let move of moves){
      let next_x = curr_x + move[0];
      let next_y = curr_y + move[1];
      
      if(next_x >= 0 && next_y >= 0 && next_x < N && next_y < M && !(prev_x === next_x && prev_y === next_y)){
        willVisit.push([next_x,next_y,sum+map[next_x][next_y],curr_x,curr_y,block+1]);
      }
    }
  }
  return max;
}

answer = 0;

for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    curr_max = dfs(i,j)
    // console.log('!!!!!!!!!!!!!!!!!')
    if(answer < curr_max){
      answer = curr_max
    };
  }
}
console.log(answer);