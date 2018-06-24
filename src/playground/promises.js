const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  resolve('This is my resolved data');
},2500);
});


console.log('before');
promise.then((data)=>{
  console.log('1 ', data);
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('Yes');
  },2500);
  })
}).then((str)=>{
  console.log('Does this run?', str);
}).catch((error)=>{
  console.log('Ooo there was an error!', error);
});
console.log('after');
