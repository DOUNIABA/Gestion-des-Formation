
const mongoose = require('mongoose')
const dotenv=require('dotenv').config

mongoose.connect(process.env.DB_CONNECT,{userNewUrlParser:true},()=>{
    console.log('connected')})

module.exports= mongoose
