const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const [N,M,x,y,K] = input.shift().split(' ').map(Number);
let curr_x = x;
let curr_y = y;
const map = [];
const dice = Array.from({length:4}, () => new Array(3).fill(0));
for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(Number));
}

const moves = input.shift().split(' ').map(Number);

const move_east = () => {
  let tmp_1 = dice[1][0]
  let tmp_2 = dice[1][1]
  let tmp_3 = dice[1][2]
  let tmp_4 = dice[3][1]
  
  dice[1][0] = tmp_4;
  dice[1][1] = tmp_1;
  dice[1][2] = tmp_2;
  dice[3][1] = tmp_3;
}
const move_west = () => {
  let tmp_1 = dice[1][0]
  let tmp_2 = dice[1][1]
  let tmp_3 = dice[1][2]
  let tmp_4 = dice[3][1]
  
  dice[1][0] = tmp_2;
  dice[1][1] = tmp_3;
  dice[1][2] = tmp_4;
  dice[3][1] = tmp_1;
}
const move_north = () => {
  let tmp_1 = dice[0][1]
  let tmp_2 = dice[1][1]
  let tmp_3 = dice[2][1]
  let tmp_4 = dice[3][1]
  
  dice[0][1] = tmp_2;
  dice[1][1] = tmp_3;
  dice[2][1] = tmp_4;
  dice[3][1] = tmp_1;
}
const move_south = () => {
  let tmp_1 = dice[0][1]
  let tmp_2 = dice[1][1]
  let tmp_3 = dice[2][1]
  let tmp_4 = dice[3][1]
  
  dice[0][1] = tmp_4;
  dice[1][1] = tmp_1;
  dice[2][1] = tmp_2;
  dice[3][1] = tmp_3;
}

for (let move of moves){
  if(move === 1 && curr_y+1 < M){
    move_east();
    curr_y++;
    if(map[curr_x][curr_y] === 0){
      map[curr_x][curr_y] = dice[3][1]
    }else{
      dice[3][1] = map[curr_x][curr_y]
      map[curr_x][curr_y] = 0;
    }
    console.log(dice[1][1])
  }
  if(move === 2 && curr_y-1 >= 0){
    move_west();
    curr_y--;
    if(map[curr_x][curr_y] === 0){
      map[curr_x][curr_y] = dice[3][1]
    }else{
      dice[3][1] = map[curr_x][curr_y]
      map[curr_x][curr_y] = 0;
    }
    console.log(dice[1][1])
  }
  if(move === 3 && curr_x-1 >= 0){
    move_north();
    curr_x--;
    if(map[curr_x][curr_y] === 0){
      map[curr_x][curr_y] = dice[3][1]
    }else{
      dice[3][1] = map[curr_x][curr_y]
      map[curr_x][curr_y] = 0;
    }
    console.log(dice[1][1])
  }
  if(move === 4 && curr_x+1 < N){
    move_south();
    curr_x++;
    if(map[curr_x][curr_y] === 0){
      map[curr_x][curr_y] = dice[3][1]
    }else{
      dice[3][1] = map[curr_x][curr_y]
      map[curr_x][curr_y] = 0;
    }
    console.log(dice[1][1])
  }
}
// console.log(dice);