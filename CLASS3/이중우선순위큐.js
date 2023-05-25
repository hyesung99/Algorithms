const input = require('fs').readFileSync('input.txt').toString().split('\n');
const N = Number(input.shift());


const enqueue = (n,queue) => {
  let curr = queue.length;
  queue[curr] = n;
  let parent = 0;

  if(curr%2 === 1){
    parent = Math.floor(curr/2);
  }else{
    parent = curr/2 - 1;
  }
  while(parent >= 0){
    if(queue[curr] > queue[parent]){
      [queue[curr],queue[parent]] = [queue[parent],queue[curr]];
      curr = parent;
      if(curr%2 === 1){
        parent = Math.floor(curr/2);
      }else{
        parent = curr/2 - 1;
      }
    }else{
      break;
    }
  }
  // console.log(n,queue);
}

const dequeue = (n,queue) => {
  let curr = 0;
  if(n===1 && queue.length > 1){
    queue[0] = queue.pop();
    
    while(true){
      console.log('here');
      let left_child = curr*2 + 1;
      let right_child = curr*2 + 2;
      if(right_child < queue.length && queue[curr] < queue[right_child]){
        [queue[curr],queue[right_child]] = [queue[right_child],queue[curr]];
        curr = right_child;
        continue;
      }
      else if(left_child < queue.length && queue[curr] < queue[left_child]){
        [queue[curr],queue[left_child]] = [queue[left_child],queue[curr]];
        curr = left_child;
        continue;
      }else{
        break;
      }
    }
  }else{
    if(queue.length !== 0){
      queue.pop();
    }
  }
  // console.log(n,queue);
}

for(let time = 0; time<N; time++){
  const calculationNum  = Number(input.shift());
  const queue = [];
  for(let calculation=0; calculation<calculationNum; calculation++){
    const [DI, n] = input.shift().split(' ');
    if(DI === 'I'){
      enqueue(Number(n), queue);
    }else{
      dequeue(Number(n), queue);
    }
  }
  if(queue.length === 0){
    console.log('EMPTY')
  }else{
    console.log(queue[0], Math.min(...queue.slice(Math.floor(queue.length/2-1),queue.length)));
  }
}