const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const numbers = input.shift().split(' ').map(Number);
numbers.sort((a,b) => a-b);
const output = [];
const visited = new Array(N);
const dfs = (cnt) => {
  if(cnt === M){
    console.log(output.join(' '));
    return;
  }
  
  for(let i=0; i<N; i++){
    if(visited[i]) continue;
    visited[i] = true;
    output.push(numbers[i]);
    dfs(cnt+1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0);