const input = require('fs').readFileSync('input.txt').toString().split('\n');
let string = input.shift().trim().split('');
const bomb = input.shift().trim();
let answer = [];
// console.log(string,bomb);

outer : for(let i=string.length-1; i>=0; i--){
  answer.push(string[i]);
  // console.log(answer);
  if(answer[answer.length-1] === bomb[0]){
    for(let j=1; j<bomb.length; j++){
      if(answer[answer.length-1-j] !== bomb[j]){
        continue outer;
      }
    }
    for(let j=0; j<bomb.length; j++){
      answer.pop();
    }
  }
}

answer.length === 0 ? console.log('FRULA') : console.log(answer.reverse().join(''));
