// var f2=require('./file2')
// let age=f2.age
//  console.log(f2.age)
//  console.log(f2.add(f2.age+1,3))

//   problem 1

//  function AC(r){
//     return Math.PI*r**2;


//  }
//  let result=AC(5);
//  console.log(result);

//  problem 2
// function add(num1,num2){
//     return num1+num2;
//  };
//  function sub(num1,num2){
//     return num1-num2;

//  };
//  function performOperation(num1,num2,callback){
//     return add(2,3);
    
//  }

//  console.log(performOperation())
     
     

 
//  performOperation(2,3,)
const { open } = require('node:fs/promises');

(async () => {
  const file = await open('./hello.txt');

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();