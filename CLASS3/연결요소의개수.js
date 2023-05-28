const input  = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,M] = input.shift().split(' ').map(Number);

const init = (N) => {
  return new Array(N).fill(0).map((item,index) => index);
}

const find = (x, graph) => {
  if(graph[x] === x){
    return x;
  }
  const currentParent = find(graph[x], graph);
  graph[x] = currentParent;

  return currentParent;
}

const union = (A,B,graph) => {
  const   rootA = find(A, graph);
  const rootB = find(B, graph);
  rootA < rootB ? (graph[rootA] = rootB) : (graph[rootB] = rootA);
}

const graph = init(N+1);
for(let i=0; i<M; i++){
  let [A,B] = [...input[i].split(' ').map(Number)];
  union(A,B,graph);
}

for(let i=1; i<N+1; i++){
  find(i,graph);
}
console.log(new Set(graph.slice(1,N+1)).size);