// console.log(functionStatement(1,2)); // 
// console.log(functionExpressions(1,2)); // ReferenceError발생
// console.log(functionArrow(1,2)); // ReferenceError발생
// 함수 선언식
function functionStatement(a,b){
  let result = a + b;
  return result;
}

// 함수 표현식
const functionExpressions = function(a,b) {
  let result = a + b;
  return result;
}

// 화살표 함수
const functionArrow = (a,b) => {
  let result = a + b;
  return result;
}

function namedFunction(){
  console.log("나는 이름이 있어요!")
}


const obj = {
  name: 'sungbird',
  age: 100,
  express : function expressFunc(){
    console.log(this.name);
  },
  outerExpress : outerExpressFunc,
  statement : function(){
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}

function outerExpressFunc(){
  console.log(this.name);
}

// obj.express();
// outerExpressFunc();
// const outer = obj.statement;
// obj.statement()
// outer();
obj.arrow()
// const obj2 = {
//   name: 'sungbird',
//   age: 100,
//   express : expressFunc,
// }
// function expressFunc(){
//     console.log(this.name);
// }
// const hee = obj2.express
// hee() //'sungbird'