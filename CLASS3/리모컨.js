const input = require('fs').readFileSync('input.txt').toString().split('\n');
const target = Number(input.shift());
const broken_num = Number(input.shift());
if(input.length){
  const broken = input.shift().split(' ').map(Number);
  const not_broken = [0,1,2,3,4,5,6,7,8,9].filter((num) => !broken.includes(num))
  let answer = 0;
  
  if(broken_num === 10){
    console.log(Math.abs(target-100));
  }
  else if(target === 100){
    console.log(0);
  }
  else{
    let target_string = target.toString().split('').map(Number);
    const channel = [];
    let isUnder = false;
    for(let digit of target_string){
      for(let i=0; i<10; i++){
        if(isUnder){
          channel.push(Math.max(...not_broken));
          answer++;
          break;
        }
        if(not_broken.includes(digit+i)){
          channel.push(digit+i);
          answer++;
          break;
        }else if(not_broken.includes(digit-i)){
          channel.push(digit-i);
          answer++;
          isUnder = true;
          break;
        }
      }
      // console.log(channel);
    }
    // console.log(Number(channel.join('')));
    let target_digit = target.toString().split('').length;
    // console.log(not_broken);
    let uplength = new Array(target_digit+1).fill(Math.min(...not_broken));
    console.log(uplength);
    uplength[0] = Math.min(...not_broken.filter((num) => num !== 0));
    console.log(Math.abs(target-uplength.map(Number).join('')));
    console.log(Math.min(answer+Math.abs(target-Number(channel.join(''))),Math.abs(target-100),target_digit+Math.abs(target-uplength.map(Number).join(''))));
  }
}else{
  console.log(target.toString().split('').length)
}