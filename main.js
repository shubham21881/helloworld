 var prompt= require('prompt-sync')()
 let age = prompt("Please enter your age :");
 if(age<=18){
    console.log("you get 20% discount");
 }
 else if(age>=18 && age<=65){
    console.log("Normal ticket price")
 }
 else {
   console.log("You get a 30% senior discount")
 }