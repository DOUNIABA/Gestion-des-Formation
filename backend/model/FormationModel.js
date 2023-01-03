
const mongoose=require('mongoose')
const FormationSchema=new mongoose.Schema({
    name:{
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
 
})
const Formation = mongoose.model("formation",FormationSchema)
module.exports=Formation
