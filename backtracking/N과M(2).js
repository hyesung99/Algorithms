const [N,M] = require('fs').readFileSync('input.txt').toString().trim().split(' ').map(Number);

const visited = new Array(N);
let output = [];
let result = '';

function dfs(cnt) {
  // console.log(output);
  if(cnt === M) {
    result += `${output.join(' ')}\n`; 
    return;
  }

  for(let i=0; i<N; i++){
    if(visited[i]) continue;
    visited[i] = true;
    if(output.length === 0){
      output.push(i+1);
      dfs(cnt+1);
      output.pop();
    }
    else if(output[cnt-1] < i+1){
      output.push(i+1);
      dfs(cnt+1);
      output.pop();
    }
    visited[i] = false;
  }
}

dfs(0);
console.log(result);