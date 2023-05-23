const input = require('fs').readFileSync('input.txt').toString().split('\n');
const [N,M] = input.shift().split(' ').map(Number);

const listen = new Set();
const see = new Set();
const answer = [];

for(let i=0; i< input.length; i++){
  if(i<N){
    listen.add(input[i]);
  }else{
    see.add(input[i]);
  }
}

listen.forEach((item) => {
  if(see.has(item)){
    answer.push(item);
  }
});

console.log(answer.length+'\n'+answer.sort().join('\n'));