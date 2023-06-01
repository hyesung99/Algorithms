const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [L,C] = input.shift().split(' ').map(Number);
const vowels = ['a','e','i','o','u'];
const alphas = input.shift().trim().split(' ');
alphas.sort();

output = [];
const visited = new Array(C);
function dfs(cnt, start) {
  if(cnt === L){
    let v = 0;
    let z = 0;
    for(let alpha of output){
      if(vowels.includes(alpha)){
        v++;
      }else{
        z++;
      }
    }
    if(v >= 1 && z >= 2){
      console.log(output.join(''));
    }
    return;
  }

  for(let i=start; i<C; i++){
    if(visited[i]) continue;
    visited[i] = true;
    output.push(alphas[i]);
    dfs(cnt+1, i);
    output.pop();
    visited[i] = false;
  }
}

dfs(0,0);