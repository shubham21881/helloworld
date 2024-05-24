const mongoose= require('mongoose')

// define the mongodb connection url

  const mongoURL= "mongodb+srv://shubham21881:Shubham21881@cluster0.4jb2omu.mongodb.net/"

 mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
 })

 //get the default connection
//  mongoose maintains a default connection object representing the mongoDB connection
const db=mongoose.Connection;

// define event listeners for databases connection;
// db.on('connection',()=>{
//     console.log("connected to mongodb server")
    
// })
// db.on('error',(err)=>{
//     console.log("mongodb connection error:"+ err)
    
// })
// db.on('disconnected',()=>{
//     console.log("Monngodb disconnected");
    
// })
module.exports=db;
