
// const willVisit = [[0,0,N]];

// outer : while(willVisit.length !== 0){
  
//   let [curr_x,curr_y,width] = willVisit.shift();
//   let curr_state = paper[curr_x][curr_y];
//   if(width === 1){
//     answer[curr_state+1]++;
//     continue
//   }
//   // console.log(curr_x,curr_y,width,curr_state);
//   switch(curr_state){
//     case 0:
//       for(let i=curr_x; i<curr_x+width; i++){
//         for(let j=curr_y; j<curr_y+width; j++){
//           if(0 !== paper[i][j]){
//             willVisit.push([curr_x,curr_y,width/3])
//             willVisit.push([curr_x,curr_y+width/3,width/3])
//             willVisit.push([curr_x,curr_y+width/3*2,width/3])
//             willVisit.push([curr_x+width/3,curr_y,width/3])
//             willVisit.push([curr_x+width/3,curr_y+width/3,width/3])
//             willVisit.push([curr_x+width/3,curr_y+width/3*2,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y+width/3,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y+width/3*2,width/3])
//             continue outer;
//           }
//         }    
//         // console.log('cut',curr_state)
//       }
//       answer[1]++;
//       break;
//     case 1:
//       for(let i=curr_x; i<curr_x+width; i++){
//         for(let j=curr_y; j<curr_y+width; j++){
//           if(1 !== paper[i][j]){
//             willVisit.push([curr_x,curr_y,width/3])
//             willVisit.push([curr_x,curr_y+width/3,width/3])
//             willVisit.push([curr_x,curr_y+width/3*2,width/3])
//             willVisit.push([curr_x+width/3,curr_y,width/3])
//             willVisit.push([curr_x+width/3,curr_y+width/3,width/3])
//             willVisit.push([curr_x+width/3,curr_y+width/3*2,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y+width/3,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y+width/3*2,width/3])
//             continue outer;
//           }
//         }    
//       }
//       answer[2]++;
//       break;
//     case -1:
//       for(let i=curr_x; i<curr_x+width; i++){
//         for(let j=curr_y; j<curr_y+width; j++){
//           if(-1 !== paper[i][j]){
//             willVisit.push([curr_x,curr_y,width/3])
//             willVisit.push([curr_x,curr_y+width/3,width/3])
//             willVisit.push([curr_x,curr_y+width/3*2,width/3])
//             willVisit.push([curr_x+width/3,curr_y,width/3])
//             willVisit.push([curr_x+width/3,curr_y+width/3,width/3])
//             willVisit.push([curr_x+width/3,curr_y+width/3*2,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y+width/3,width/3])
//             willVisit.push([curr_x+width/3*2,curr_y+width/3*2,width/3])
//             continue outer;
//           }
//         }    
//       }
//       answer[0]++;
//       break;
//     }
// }

// console.log(answer.join('\n'))
