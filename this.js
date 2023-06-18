const obj = {
  name: 'sungbird',
  age: 100,
  arrow: () => {
    console.log(this.name);
  }
}
console.log(obj.arrow.this); // 'sungbird'