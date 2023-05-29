const N = Number(require('fs').readFileSync('input.txt').toString().trim());
console.log(N);
const tree = Array.from({length:N} , () => new Array(N*2-1).fill(' '));
const center = (N*2-2)/2;

const makeStar = (x,y) => {
  tree[x][y] = '*';

  tree[x+1][y-1] = '*';
  tree[x+1][y+1] = '*';

  tree[x+2][y-2] = '*';
  tree[x+2][y-1] = '*';
  tree[x+2][y] = '*';
  tree[x+2][y+1] = '*';
  tree[x+2][y+2] = '*';
} 

for(let i=0; i<N; i++){
  for(let j=0; j<N*2-1; j++){
    if(i%3 === 0 && (j+i === center || j-i === center)){
      makeStar(i,j);
    }
  }
}
for(let i=0; i<N; i++){
  console.log(tree[i].join(''));
}