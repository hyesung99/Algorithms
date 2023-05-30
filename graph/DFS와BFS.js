const { reverse } = require('dns');
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M,V] = input.shift().split(' ').map(Number);

const graph = Array.from( {length:N+1} , () => [])

for(let i=0; i<M; i++){
  let [x,y] = input.shift().split(' ').map(Number);
  graph[x] = [...graph[x],y];
  graph[y] = [...graph[y],x];
}

for(let l=0; l<graph.length; l++){
  graph[l] = graph[l].sort((a,b) => a-b);
}

// console.log(graph);
const dfs = (start) => {
  const willVisit = [start];
  const visited = [];
  while(willVisit.length !== 0){
    let node = willVisit.pop();
    if(!visited.includes(node)){
      visited.push(node);
      willVisit.push(...graph[node].reverse())
    }
  }
  return visited
}

const bfs = (start) => {
  const willVisit = [start];
  const visited = [];
  while(willVisit.length !== 0){
    let node = willVisit.shift();
    if(!visited.includes(node)){
      visited.push(node);
      willVisit.push(...graph[node])
    }
  }
  return visited
}

console.log(dfs(V).join(' '));
for(let q=0; q<graph.length; q++){
  graph[q] = graph[q].sort((a,b) => a-b);
}
// console.log(graph);
console.log(bfs(V).join(' '));