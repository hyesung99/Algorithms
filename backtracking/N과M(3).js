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
  
    output.push(i+1);
    dfs(cnt+1);
    output.pop();
  
  }
}

dfs(0);
console.log(result);