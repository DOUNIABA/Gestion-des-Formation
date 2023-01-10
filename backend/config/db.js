const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

mongoose.connect(process.env.CONNECT,{useNewUrlParser: true},()=>{console.log('connected')});
 
module.exports= mongoose