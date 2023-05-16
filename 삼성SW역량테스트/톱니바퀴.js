const input = require('fs').readFileSync('input.txt').toString().split('\n');
const gears = [];
for(let i=0; i<4; i++){
  gears.push(input.shift().split('').map(Number));
}

const K = Number(input.shift());

const spin = (gear,direction) => {
  if(direction === 1){
    // console.log([gear[7],...gear.slice(0,7)]);
    return [gear[7],...gear.slice(0,7)];
  } else if (direction === -1){
    // console.log([...gear.slice(1,8),gear[0]]);
    return [...gear.slice(1,8),gear[0]]
  }
}

// 2,6
for(let i=0; i<K; i++){
  let [index, direction] = input.shift().split(' ').map(Number);
  index--;
  let copyGears = [...gears];
  console.log(copyGears)
  gears[index] = spin(gears[index],direction);
  //현재 기준 왼쪽 톱니바퀴들
  for(let j=index-1; j>=0; j--){
    //같으면
    if(gears[j][2] === gears[j+1][6] && direction !== 0){
      copyGears[j] = spin(gears[j],direction);
      direction = -direction;
    }else{
      direction=0;
    }
  }
  //현재 기준 오른쪽 톱니바퀴들
  for(let j=index+1; j<4; j++){
      //같으면
    if(gears[j-1][2] === gears[j][6] && direction !== 0){
      copyGears[j] = spin(gears[j],direction);
      direction = -direction;
    }else{
      direction=0;
    }
  }
  gears = copyGears;
}
answer = 0;
if(gears[0][0] === 1) answer+=1
if(gears[1][0] === 1) answer+=2
if(gears[2][0] === 1) answer+=4
if(gears[3][0] === 1) answer+=8
console.log(gears);
console.log(answer);