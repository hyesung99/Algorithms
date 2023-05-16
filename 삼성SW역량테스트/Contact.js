const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const N = Number(input.shift())
const waves = [];



for(let i=0; i<N; i++){
  waves.push(input.shift().trim());
}
console.log(waves);

for(let wave of waves){
  let curr = 0;
  console.log('wave',wave);
  while(curr < wave.length){
    console.log('next');
    let search = 0;
    console.log('here');
    if(wave.slice(curr,curr+3) === '100'){
      search += 3;
      console.log('curr',curr+search, wave[curr+search]);
      
      while(wave[curr+search] === '0'){
        search++;
        console.log('find +0');
      }

      if(wave[curr+search] === '1'){
        while(wave[curr+search] === '1' && wave.slice(curr+search,curr+search+3) !== '100' && wave.slice(curr+search,curr+search+2) !== '01'){
          console.log('find +1');
          search++;
        }
        curr += search;
        
        if(curr >= wave.length){
          console.log('YES');
          break;
        }
      }
    }

    if(wave.slice(curr,curr+3) === '100') continue;
    if(wave.slice(curr,curr+2) === '01'){
      console.log('find 01');
      curr+=2;
      if(curr >= wave.length){
        console.log('YES');
        break;
      }
    }else{  
      console.log('NO');
      break;
    }
  }  
}