const mongoose=require('mongoose')

const RoleSchema= new mongoose.schema({
    name:{
        type:String,
    }
})

const Role=mongoose.model("role",RoleSchema)
module.exports=Role