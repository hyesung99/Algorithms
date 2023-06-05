const input = require('fs').readFileSync('input.txt').toString().split('\n');
const A = [];
const [N,M,K] = input.shift().split(' ').map(Number);
const map = Array.from({length:N+1} , () => new Array(N+1).fill(5));
let trees = [];
const moves = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
for(let i=0; i<N; i++){
  A.push(input.shift().split(' ').map(Number));
}
for(let i=0; i<M; i++){
  trees.push([...input.shift().split(' ').map(Number), true]);
}

const spring = () => {
  let tr = trees.length;
  for(let i=0; i<tr; i++){
    // let [curr_x,curr_y,curr_age, isAlive] = trees[i];
    if(map[trees[i][0]][trees[i][1]] >= trees[i][2]){
      map[trees[i][0]][trees[i][1]] -= trees[i][2];
      trees[i][2]++;
    }else{
      trees[i][3] = false;
    }
  }
}

const summer = () => {
  trees = trees.filter((el) => {
    if(el[3]) return true;
    else{
      const [x,y,age] =  el;
      map[x][y] += Math.floor(age/2);
      return false;
    }
  })
  
}

const fall = () => {
  let tr = trees.length;
  for(let i=0; i<tr; i++){
    let [curr_x,curr_y,curr_age, isAlive] = trees[i];
    if(curr_age%5 === 0){
      for(let move of moves){
        let next_x = curr_x + move[0];
        let next_y = curr_y + move[1];
  
        if(next_x > 0 && next_y > 0 && next_x <= N && next_y <= N){
          trees.push([next_x,next_y,1,isAlive]);
        }
      }
    }
  }
}

const winter = () => {
  for(let i=0; i<A.length; i++){
    for(let j=0; j<A[0].length; j++){
      map[i+1][j+1]+=A[i][j];
    }
  }
}

for(let i=0; i<K; i++){
  // console.log('time',i);
  trees.sort((a,b)=>a[2]-b[2])
  
  // console.log('spring')
  spring();
  // console.log('tree:',trees);
  // console.log(map);
  
  // console.log('summer')
  summer();
  // console.log('tree:',trees);
  // console.log(map);
  
  // console.log('fall')
  fall();
  // console.log('tree:',trees);
  // console.log(map);

  // console.log('winter')
  winter();
  // console.log('tree:',trees);
  // console.log(map);
}

console.log(trees.length);