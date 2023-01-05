const mongoose=require('mongoose')

const RoleSchema= new mongoose.Schema({
    role:{
        type:String,
    }
})

const Role=mongoose.model('role',RoleSchema)
module.exports=Role


