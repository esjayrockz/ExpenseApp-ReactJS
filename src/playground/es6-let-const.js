let nameVar = 'Suvajit';
 nameVar = 9;
console.log('nameVar', nameVar);

const multiplier = {
  numbers: [2,4,6],
  multiplyBy: 5,
  multiply(){
    return this.numbers.map((number)=> number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
