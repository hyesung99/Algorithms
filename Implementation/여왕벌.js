const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [M,day] = input.shift().split(' ').map(Number);
const lavar = new Array(2*M-1).fill(1);

for(let i=0; i<day; i++){
  let [z,o,t] = input[i].split(' ').map(Number)
  for(let j=z; j<z+o; j++){
    lavar[j]+=1;
  }
  for(let j=z+o; j<z+o+t; j++){
    lavar[j]+=2;
  }
}

let copy = lavar.slice(M,2*M+1)

for(let i=M-1; i>=0; i--){
  console.log(lavar[i],...copy)
}