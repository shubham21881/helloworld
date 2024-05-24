  const prompt=require('prompt-sync')()
  const guestlist=['sam','arshi','om','himanshu','bhavesh','trupti','chandan','sheetal','arti','chandni','harsita'];
  
 const nametocheck =prompt("enter your name");
 if(guestlist.includes(nametocheck)){
  console.log(`welcome to the party,${nametocheck}`)

 }else{
  console.log('sorry,you are not on the guestlist')
 }