
const mongoose=require('mongoose')
const Userschema= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:Strinng,
    },
}
)
const User=mongoose.model("user",Userschema)
module.exports=User
