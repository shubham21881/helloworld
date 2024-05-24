const express =require('express');
const person = require('../models/person');
const router= express.Router()

router.post('/', async (req,res)=>{
    try{
    const data= req.body//assuming the request body contain the person data 
 
    // create a new person document using the mongoose model
    const newperson= new person(data);
    //  save the new person to the databases
 const response= await newperson.save();
 console.log('data saved');
 res.status(200).json(response);   
 }
 catch(err){
  console.log(err);
  res.status(500).json({error:'Internal server Error'})
 }
 })



 router.get('/',async (req,res)=>{
    try{
    const persondata= await  person.find()
     console.log('data fetched')
     res.status(200).json(persondata)
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal server Error'})
      }
 
 })
 
 
 router.get('/:work', async (req,res)=>{
    try{
     const worktype= req.params.work;
     if(worktype=='chef'||worktype=='manager'||worktype=='waiter'){
 
        const persons =await person.find({work:worktype});
        console.log('response fetched')
        res.status(200).json(persons);
     }
     else{
       res.status(404).json({error :'Invalid work type'})
     }
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal server Error'})
      }
 })
 router.put('/:id',async (req,res)=>{
   try{
   const personid =req.params.id; // extract the id from the url parameter
   const  updatedpersondata= req.body;
   const response = await person.findByIdAndUpdate(personid,updatedpersondata,{
      new:true,//return the updated document
      runValidators:true //run mongoose validation
   })
   if(!response){
      return res.status(404).json({error:'person not found'});
   }
   console.log('data updated');
   res.status(200).json(response)
   }
   catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server Error'})
     }

 })
 router.delete('/:id',async (req,res)=>{
   try{
   const personid=req.params.id;
   const deletedperson= await person.findByIdAndDelete(personid)
   if(!deletedperson){
      return res.status(404).json({error:'person not found'});
   }
   console.log('data delete');
   res.status(200).json({error:'person deleted successfully'})
   }
 
 catch(err){
   console.log(err);
   res.status(500).json({error:'Internal server Error'})
  }
})
    
 
module.exports=router
 
 
 