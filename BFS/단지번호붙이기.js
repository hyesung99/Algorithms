const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const num = Number(input.shift());
const map = [];
const dx = [0,0,-1,1];
const dy = [-1,1,0,0];

for(let i=0; i<num; i++){
  map.push(input.shift().trim().split('').map(Number));
}

const dfs = (start_x,start_y,bunzi) => {
  const willVisit = [];
  const visited = [];

  willVisit.push([start_x,start_y]);
  
  while(willVisit.length !== 0){ 
    // console.log(willVisit.length);
    node = willVisit.pop();
    
    if(!visited.includes(node)){
      map[node[0]][node[1]] = bunzi;
      visited.push(node);
      for(let j=0; j<4; j++){
        let next_x = node[0] + dx[j];
        let next_y = node[1] + dy[j];
        
        if(next_x >= 0 && next_y >= 0 && next_x < num && next_y < num && map[next_x][next_y] === 1){
          // console.log(next_x,next_y)
          willVisit.push([next_x,next_y]);
          
        }
      }
    }
  }
}
let bunzi = 2;
for(let p=0; p<num; p++){
  for(let q=0; q<num; q++){
    if(map[p][q] === 1){
      dfs(p,q,bunzi);
      bunzi++;
    }
  }
}

// console.log(map);
const result = [];
for(let k=2; k<bunzi; k++){
  result.push(map.flat().filter(item => item === k).length);
}
// console.log(result);
result.sort(function(comp1, comp2){
  return comp1 - comp2;
});
console.log(result.length);
for(let l=0; l<result.length; l++){
  console.log(result[l]);
}