const express= require('express')
const router= express.Router()
const menuitem= require('../models/menu')
// const router = require('./personroutes')

router.post('/', async (req,res)=>{
    try{
     const menudata=req.body
     const newmenudata =new menuitem(menudata);
     const response= await newmenudata.save();
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
    const menu= await  menuitem.find()
     console.log('data fetched')
     res.status(200).json(menu)
    }
    catch(err){
       console.log(err);
       res.status(500).json({error:'Internal server Error'})
      }
 
 })
 router.get('/:taste', async (req,res)=>{
   const tastetype=req.params.taste;
   const person= await menuitem.find({taste:tastetype})
   console.log('data is fetched')
   res.status(200).json(person);
 })

 router.put('/:id', async (req,res)=>{
   const menuid= req.params.id;
   const newdata= req.body
   const updateddata =await menuitem.findByIdAndUpdate(menuid,newdata)
   console.log('data is updated successfully')
   res.status(200).json(updateddata) 
 })
 
router.delete('/:id',async (req,res)=>{
   const person =req.params.id;
   const deletemenu= await menuitem.findByIdAndDelete(person)
   console.log('menu will be deleted');
   res.status(200).json(deletemenu)
})


 module.exports = router