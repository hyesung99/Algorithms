const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [R,C,M] = input.shift().trim().split(' ').map(Number);
let answer = 0;
let sharks = [];
for(let i=0; i<M; i++){
  let shark = (input.shift().trim().split(' ').map(Number));
  sharks.push(shark);
}
let fisher = 0;

const filterSharksBySize = (sharks) => {
  // 상어의 위치를 기반으로 그룹화합니다.
  let groupedSharks = {};
  for (let shark of sharks) {
    let key = `${shark[0]},${shark[1]}`;
    if (!groupedSharks[key] || shark[4] > groupedSharks[key][4]) {
      groupedSharks[key] = shark;
    }
  }

  // 그룹화된 상어들을 새로운 배열로 변환합니다.
  let filteredSharks = Object.values(groupedSharks);
  return filteredSharks;
}


const move_sharks = (shark) => {
  let [r,c,s,d,z] = shark;
  for(let i=0; i<s; i++){
    if(d === 1){
      if(r === 1){
        d=2;
        r++;
      }else{
        r--;
      }
    }else if(d === 2){
      if(r === R){
        d=1;
        r--;
      }else{
        r++;
      }
    }else if(d === 3){
      if(c === C){
        d=4;
        c--;
      }else{
        c++;
      }
    }else if(d === 4){
      if(c === 1){
        d=3;
        c++;
      }else{
        c--;
      }
    }
  }

  return([r,c,s,d,z]);

}

for(let i=0; i<C; i++){
  fisher++;
  sharks.sort((a,b) => a[0]-b[0]);
  for(let j=0; j<sharks.length; j++){
    let shark_c = sharks[j][1];
    if(shark_c === fisher){
      answer+=sharks[j][4];
      sharks = sharks.filter((element, index) => index !== j);
      break;
    }
  }
  for(let j=0; j<sharks.length; j++){
    sharks[j] = move_sharks(sharks[j]);
  }
  sharks = filterSharksBySize(sharks);
  // for(let p=1; p<sharks.length; p++){
  //   for(let q=p+1; q<sharks.length; q++){
  //     if(sharks[p][0] === sharks[q][0] && sharks[p][1] === sharks[q][1]){
  //       if(sharks[p][4] > sharks[q][4]){
  //         sharks[q] = [-1,-1];
  //       } else {
  //         sharks[p] = [-1,-1];
  //       }
  //     }
  //   }
  // }
  // sharks = sharks.filter((element) => element !== [-1,-1]);
}
console.log(answer);