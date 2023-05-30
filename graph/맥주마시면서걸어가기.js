const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift());

for(let i=0; i<N; i++){

  let answer = 'sad';
  let store = [];
  let num_store = Number(input.shift());
  let home = input.shift().split(' ').map(Number);
  
  for(let j=0; j<num_store; j++){
    store.push(input.shift().split(' ').map(Number));
  }
  // console.log('store: ',store);
  let pentaport = input.shift().split(' ').map(Number);
  

  let willVisit = [home];
  let visited = [];
  while(willVisit.length !== 0){
    // console.log('willvisit:',willVisit);
    // console.log('visited:',visited);
    let [curr_x,curr_y] = willVisit.shift();
    // console.log('curr:',curr_x,curr_y);
    
    if(Math.abs(pentaport[0]-curr_x) + Math.abs(pentaport[1]-curr_y) <= 1000){
      answer = 'happy';
      break;
    }
    for(next_store of store){
      if(Math.abs(next_store[0]-curr_x) + Math.abs(next_store[1]-curr_y) <= 1000 && !visited.includes(next_store)){
        willVisit.push(next_store);
        visited.push(next_store);
      }
    }
    
  }
  console.log(answer);
}