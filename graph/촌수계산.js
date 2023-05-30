const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const numNode = Number(input.shift());
const[s1,s2] = input.shift().split(' ').map(Number);
const numEdge = Number(input.shift());
const family = Array.from({ length: numNode+1 }, () => Array());
let answer = false;
for(let i=0; i<numEdge; i++){
  let [parent, child] = input.shift().split(' ').map(Number);
  // family[child] = family;
  family[parent].push(child);
  family[child].push(parent);
}
// console.log(family);
const dfs = (s1,s2) => {
  const willVisit = [];
  const visited = [];

  willVisit.push([s1,0]);

  while(willVisit.length !== 0){
    let [node,height] = willVisit.shift();
    // console.log(node);
    
    if(node === s2){
      console.log(height);
      answer = true;
      break;
    }
    
    if(!visited.includes(node) && family[node]){
      for(let j=0; j<family[node].length; j++){
        willVisit.push([family[node][j],height+1]);
      }
      visited.push(node);
    }
  }
} 
dfs(s1,s2);
if(!answer){
  console.log(-1);
}