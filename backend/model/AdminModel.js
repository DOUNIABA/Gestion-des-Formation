
const mongoose=require('mongoose')

const Admins = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength: [8, "Password should contains at least 8 characters"],
    }
}
)
const Admin=mongoose.model("admin",Admins)
module.exports=Admin
