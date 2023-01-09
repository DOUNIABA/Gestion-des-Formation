
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

mongoose.connect(process.env.CONNECT,{useNewUrlParser: true}).then(()=>{
    console.log('connected')
})
.catch((err)=>{console.log(err)})

module.exports= mongoose
