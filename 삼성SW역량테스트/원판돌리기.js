const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M,T] = input.shift().split(' ').map(item => Number(item));
const circles = [['dummy']];
const moves = [[0,1],[0,-1],[1,0],[-1,0]];
// 1.rotate함수 구현 -> done
// 2.원판에 수 남아있으면 인접하면서 수가 같은 것 모두 찾음. -> done
// 3.그러한 수가 있는 경우에는 인접하면서 같은 수를 모두 지운다 -> done
// 4.없는 경우에는 원판에 적힌수의 평균을 구하고, 평균보다 큰 수에서 1을 빼고, 작은 수에는 1을 더한다.


for(let i=0; i<N; i++){
  circles.push(input.shift().split(' ').map(Number));
}

function rotate(multiple,direction,amount){
  
  for(let i=1; i<N+1; i++){
    if((i)%multiple !== 0) continue;
    const circle = circles[i];
    switch(direction){
      // 시계방향
      case 0 : 
        for(let j=0; j<amount; j++){
          circle.unshift(circle.pop());
        }
        break;
      // 반시계방향
      case 1 :
      for(let j=0; j<amount; j++){
        circle.push(circle.shift());
      }
      break;
    }
  }
  findAndDelete(circles);
}

function findAndDelete(){
  let isSame = false;
  for(let i=1; i<N+1; i++){
    for(let j=0; j<M; j++){
      
      const target = circles[i][j];
      const deletes = [[i,j]];
      while(deletes.length > 0){
        const [x,y] = deletes.shift();
        for(let move of moves){
          let nextI = x+move[0];
          let nextJ = y+move[1];

          if(nextJ === -1){
            nextJ = M-1;
          }
          if(nextJ === M){
            nextJ = 0;
          }
          if(nextI > 0 && nextJ >= 0 && nextI < N+1 && nextJ < M && circles[nextI][nextJ] === target && circles[nextI][nextJ] !== 0){
            deletes.push([nextI,nextJ])
            circles[nextI][nextJ] = 0;
            circles[i][j] = 0;
            isSame = true;
          }
        }
      }
    } 
  }
  if(!isSame){
    averagePlusMinus();
  }
}

function averagePlusMinus(){
  const sum = circles.slice(1,N+1).flat().reduce((sum, item) => sum+item,0);
  const average = sum/circles.slice(1,N+1).flat().filter(value => value !== 0).length;

  for(let i=1; i<N+1; i++){
    for(let j=0; j<M; j++){
      if(circles[i][j] === 0) continue;
      if(circles[i][j] < average){
        circles[i][j]+=1;
      }
      else if(circles[i][j] > average){
        circles[i][j]--;
      }
    }
  }
}


for(let i=0; i<T; i++){
  const[xi,di,ki] = input.shift().split(' ').map(Number);

  rotate(xi,di,ki,circles);
}

console.log(circles.slice(1,N+1).flat().reduce((sum, cur) => sum+cur,0));