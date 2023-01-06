
const mongoose=require('mongoose')
const FormationSchema=new mongoose.Schema({
    formation:{
        type:String,
    },
    image:{
        type:String,
    },
    duree:{
        type:String,
    },
    description:{
        type:String
    },
    Organisme_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Organisme'
    }
 
})
const Formation = mongoose.model("formation",FormationSchema)
module.exports=Formation
