const mongoose= require('mongoose')
const mongoURL='mongodb://127.0.0.1:27017/hello2';
mongoose.connect(mongoURL)
const db=mongoose.Connection;
module.exports=db;

