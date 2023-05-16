const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);
const map = [];
const camera_1_moves = [[1,0],[-1,0],[0,1],[0,-1]];
const camera_2_moves = [[1,0],[0,1]];
// const camera_1_moves = [[1,0],[-1,0],[0,1],[0,-1]];
// const camera_1_moves = [[1,0],[-1,0],[0,1],[0,-1]];
// const camera_1_moves = [[1,0],[-1,0],[0,1],[0,-1]];
for(let i=0; i<N; i++){
  map.push(input.shift().trim().split(' ').map(Number));
}
const cameras = [];
for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    if([1,2,3,4,5,6].includes(map[i][j])){
      cameras.push([i,j,map[i][j]])
    }  
  }
}
cameras.push([-1,-1,-1])
const tree = [[[...map],cameras[0][0],cameras[0][1],cameras[0][2],0]];

while(tree.length !== 0){
  let [curr_map,camera_x,camera_y,camera_type,height] = tree.shift();
  if(camera_type === -1) break;

  switch(camera_type){
    case 1:
      for(let move of camera_1_moves){
        while(camera_x+move[0] >= 0 && camera_y+move[1] >= 0 && camera_x+move[0] < N && camera_y+move[1] < M && (curr_map[camera_x + move[0]][camera_y + move[1]] === 0 || curr_map[camera_x + move[0]][camera_y + move[1]] === '#')){
          camera_x += move[0]
          camera_y += move[1]
          curr_map[camera_x][camera_y] = '#';
        }
        tree.push([curr_map,cameras[height+1][0],cameras[height+1][1],cameras[height+1][2],height+1]);
      }
      break;
      case 2:
        for(let move of camera_2_moves){
          while(camera_x+move[0] >= 0 && camera_y+move[1] >= 0 && camera_x < N && camera_y < M && (curr_map[camera_x + move[0]][camera_y + move[1]] === 0 || curr_map[camera_x + move[0]][camera_y + move[1]] === '#')){
            camera_x += move[0]
            camera_y += move[1]
            curr_map[camera_x][camera_y] = '#';
          }
          tree.push(curr_map,cameras[height+1][0],cameras[height+1][1],cameras[height+1][2],height+1);
        }
      break

  }
}

console.log([...tree[tree.length-1][0].flat()].filter((item)=> item === 0).length);