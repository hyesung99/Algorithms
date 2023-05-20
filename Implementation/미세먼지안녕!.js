const input = require('fs').readFileSync('input.txt').toString().split('\n');
const moves = [[0,1],[-1,0],[0,-1],[1,0]];
const [row,col,time] = input.shift().split(' ').map(Number);
const map = [];

for(let i=0; i<row; i++){
  map.push(input.shift().split(' ').map(Number));
}

for(let i=0; i<time; i++){
  const spreadList = [];

  for(let p=0; p<row; p++){
    for(let q=0; q<col; q++){
      if(map[p][q] > 0){
        const value = Math.floor(map[p][q] / 5);
        for(let move of moves){
          let next_row = p + move[0];
          let next_col = q + move[1];
          if(next_row >=0 && next_col >= 0 && next_col < col && next_row < row && map[next_row][next_col] !== -1){
            spreadList.push([next_row,next_col,value]);
            map[p][q] -= value;
          }
        }
      }
    }
  }

  for(let spread of spreadList){
    const [r,c,v] = spread;
    map[r][c] += v;
  }

  let upside;
  for(let j=0; j<row; j++){
    if(map[j][0] === -1){
      upside = j;
      break;
    }
  }
  
  let downside = upside+1;

  let [ur,uc] = [upside,1];
  let upside_curr = map[ur][uc];
  map[ur][uc] = 0;
  for(let move of moves){
    // console.log('here',ur,uc);
    while(ur+move[0] < row && uc+move[1] < col && ur+move[0] >= 0 && uc+move[1] >= 0){
      if(ur === upside && uc === 0){
        map[upside][0] = -1;
        break;
      }
      let next = map[ur+move[0]][uc+move[1]];
      map[ur+move[0]][uc+move[1]] = upside_curr;
      upside_curr = next;
      
      ur += move[0];
      uc += move[1];
    }
  }

  const downside_move = [[0,1],[1,0],[0,-1],[-1,0]];

  let [dr,dc] = [downside,1];
  let downside_curr = map[dr][dc];
  map[dr][dc] = 0;
  for(let move of downside_move){
    // console.log('downside',dr,dc);
    while(dr+move[0] < row && dc+move[1] < col && dr+move[0] >= 0 && dc+move[1] >= 0){
      if(dr === downside && dc === 0){
        map[downside][0] = -1;
        break;
      }
      let next = map[dr+move[0]][dc+move[1]];
      map[dr+move[0]][dc+move[1]] = downside_curr;
      downside_curr = next;
      
      dr += move[0];
      dc += move[1];
    }
  }
  // console.log(map);
}
console.log(map.flat().reduce((sum, curr) => {return sum += curr})+2);