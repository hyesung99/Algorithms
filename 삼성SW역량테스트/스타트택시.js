const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M,FUEL] = input.shift().split(' ').map(item => Number(item));
const map = [];
const moves = [[-1,0],[0,-1],[0,1],[1,0]];
for(let i=0; i<N; i++){
  map.push(input.shift().split(' ').map(item => Number(item)));
}

let [currX,currY] = input.shift().split(' ').map(item => Number(item));
currX--;
currY--;
const passengers = input.map((item) => item.split(' ').map(Number))

const passengerMap =  Array.from({length:N}, () => new Array(N).fill(0));
for(const passenger of passengers){
  map[passenger[0]-1][passenger[1]-1] = 2
  passengerMap[passenger[0]-1][passenger[1]-1] = [passenger[2]-1,passenger[3]-1];
}

function findPassenger(startX,startY,fuel){
  const willVisit = [[startX,startY,fuel]];
  const visited = Array.from({length:N}, () => new Array(N).fill(false));
  while(willVisit.length > 0){
    const [x,y,fuel] = willVisit.shift();
    if(fuel < 0) return false;
    visited[x][y] = true;
    if(map[x][y] === 2){
      map[x][y] = 0;
      // console.log('손님 출발 : ', x,y)
      return [x,y,fuel,...passengerMap[x][y]];
    }
    for(const move of moves){
      const nextX = x+move[0];
      const nextY = y+move[1];

      if(nextX >= 0 && nextY >= 0 && nextX < N && nextY < N && map[nextX][nextY] !== 1 && !visited[nextX][nextY]){
        willVisit.push([nextX,nextY,fuel-1]);
      }
    }
  }
  return false;
}

function drive(startX,startY,fuel,endX,endY){
  const willVisit = [[startX,startY,fuel,0]];
  const visited = Array.from({length:N}, () => new Array(N).fill(false));
  while(willVisit.length > 0){
    const [x,y,fuel,distance] = willVisit.shift();
    if(fuel < 0) return false;
    visited[x][y] = true;
    if(x === endX && y === endY){
      // console.log('도착',x,y);
      // console.log('충전+', distance * 2, fuel);
      return [x,y,fuel + distance*2];
    }
    for(const move of moves){
      const nextX = x+move[0];
      const nextY = y+move[1];

      if(nextX >= 0 && nextY >= 0 && nextX < N && nextY < N && map[nextX][nextY] !== 1 && !visited[nextX][nextY]){
        willVisit.push([nextX,nextY,fuel-1,distance+1]);
      }
    }
  }
  return false;
}


let fuel = FUEL;
let endX; let endY;
let isPossible = true;
for(let i=0; i<M; i++){
  let result = findPassenger(currX,currY,fuel);
  if(result){
    [currX,currY,fuel,endX,endY] = result;
  }else{
    isPossible = false;
    console.log(-1);
    break;
  }
  
  result = drive(currX,currY,fuel,endX,endY);
  if(result){
    [currX,currY,fuel] = result;
  }else{
    isPossible = false;
    console.log(-1);
    break;
  }
}

if(isPossible) console.log(fuel);