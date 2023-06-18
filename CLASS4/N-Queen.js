const N = Number(require('fs').readFileSync('input.txt').toString().trim());
const board = [];
let answer = 0;

const hasAnyQueensConflicts = (x) => { 
  for(let i=0; i<x; i++){ 
      if(board[i] === board[x]) { // 이전말과 같은 행 같은 열인지 체크
          return true;
      }
      if(Math.abs(board[x] - board[i]) === x-i){ // 대각선 체크
          return true;
      }
  }

  return false;
}

let findQueen = (row) => {
  if(row === N){
    answer++;
    return;
  }
  for(let col=0; col<N; col++){
    board[row] = col;
    if(!hasAnyQueensConflicts(row)){
      findQueen(row+1);
    }
  }
}
findQueen(0);

console.log(answer);
let test;
console.log(`${test}`)