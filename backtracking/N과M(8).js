const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const numbers = input.shift().split(' ').map(Number);
numbers.sort((a,b) => a-b);

const output = [];
const dfs = (cnt, start) => {
  if(cnt === M){
    console.log(output.join(' '));
    return;
  }

  for(let i=start; i<N; i++){
    output.push(numbers[i]);
    dfs(cnt+1,i);
    output.pop();
  }
}

dfs(0,0);