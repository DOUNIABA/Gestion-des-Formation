
const mongoose=require('mongoose')
const Organisme = require('./OrganismeModel')
const Userschema= new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String,
    },
    role_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
},
    Organisme_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Organisme'
    },
    formation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Formation'
    }
}
)
const User=mongoose.model("user",Userschema)
module.exports=User
