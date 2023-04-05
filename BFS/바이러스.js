const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const computers = Number(input.shift());
const numLink = Number(input.shift());
const tree = [];



for(let i=0; i<computers+1; i++){
  tree.push([]);  
}

for(let j=0; j<numLink; j++){
  let link = input.shift().split(' ').map(Number);
  tree[link[0]].push(link[1]);
  tree[link[1]].push(link[0]);
}

const dfs = () => {
  let start = 1;
  const visited = [];
  const willVisit = [];


  willVisit.push(start);

  while(willVisit.length !== 0){
    let node = willVisit.pop();
    
    if(!visited.includes(node)){
      visited.push(node);
      willVisit.push(...tree[node]);
    }
  }
  
  console.log(visited.length-1);
}

dfs();