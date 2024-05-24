const express=require('express')
const db=require('./db')
 const person=require('./models/person') 
 const menuitem = require('./models/menu')
 const bodyParser=require('body-parser')

 // const { on } = require('prompt')
 const app =express()
 app.use(bodyParser.json());  //req.body
 app.get('/shubham',(req,res)=>{
    res.send('hello i am shubham')
 })
 app.get('/ram',(req,res)=>{
    res.send('ram is a good boys')
 })
// POST route to add a person
// app.post('/person', async (req,res)=>{
//    try{
//    const data= req.body//assuming the request body contain the person data 

//    // create a new person document using the mongoose model
//    const newperson= new person(data);
//    //  save the new person to the databases
// const response= await newperson.save();
// console.log('data saved');
// res.status(200).json(response);   
// }
// catch(err){
//  console.log(err);
//  res.status(500).json({error:'Internal server Error'})
// }
// })



// app.post('/menu', async (req,res)=>{
//    try{
//     const menudata=req.body
//     const newmenudata =new menuitem(menudata);
//     const response= await newmenudata.save();
//     console.log('data saved');
//     res.status(200).json(response);  
//    }
//    catch(err){
//       console.log(err);
//       res.status(500).json({error:'Internal server Error'})
//      }
   
// })

// app.get('/menu',async (req,res)=>{
//    try{
//    const menu= await  menuitem.find({name:"pizza"})
//     console.log('data fetched')
//     res.status(200).json(menu)
//    }
//    catch(err){
//       console.log(err);
//       res.status(500).json({error:'Internal server Error'})
//      }

// })

// app.get('/person/:work', async (req,res)=>{
//    try{
//     const worktype= req.params.work;
//     if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){

//        const persons =await person.find({work:worktype});
//        console.log('response fetched')
//        res.status(200).json(persons);
//     }
//     else{
//       res.status(404).json({error :'Invalid work type'})
//     }
//    }
//    catch(err){
//       console.log(err);
//       res.status(500).json({error:'Internal server Error'})
//      }
// })
   

const personroutes= require('./routes/personroutes')
app.use('/person',personroutes)
 
const menurouters =require('./routes/menuroutes')
app.use('/menu',menurouters)



 app.listen(3000,()=>{
    console.log( 'your server is live')
 })