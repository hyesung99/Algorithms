const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const BFS = (graph, start) => {

  const visited = [];
  const willVisit = [];

  willVisit.push(start);

  while(willVisit.length != 0){
    const node = willVisit.shift();
    if(!visited.includes(node)){
      visited.push(node);
      willVisit.push(...graph[node]);
    }
  }
  return visited;
}

console.log(BFS(graph,'A').join(' '));