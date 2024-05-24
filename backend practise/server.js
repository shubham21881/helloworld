const express = require('express')
const app = express()
const db=require('./db')
const person=require('./models/person')
const menuitem=require('./models/menu')
const bodyParser=require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/upload',async (req,res)=>{
try{
    const newpersondata = req.body; 
    const newperson= new person(newpersondata);
    const savedperson=  await newperson.save()
    console.log('saved person to databases');
    res.status(201).json(savedperson)
}
catch(error){
  console.error('Error saving person:',error);
  res.status(500).json({error:'internal server error'});
}
})
app.get('/person',async (req,res)=>{
    try{
    const persons =await person.find()
    res.json(persons)
    }
    catch(error){
        console.error('error fetching persons:',error);
        res.status(500).json({error:'internal server error'});
    }
})
app.get('/shubham',(req,res)=>{
 res.send('hello i am shubham')
})

app.post('/menu',async(req,res)=>{
    try{
         const data=req.body;
         const menu= new menuitem(data)
         

          const saveditem= await menu.save()
          console.log('saved menu to databases');
    res.status(201).json(saveditem)

    }
    catch(error){
        console.error('Error saving person:',error);
  res.status(500).json({error:'internal server error'});

    }
})

app.listen(3000,()=>{
    console.log("server is now live")
})