
const mongoose=require('mongoose')
const Employes = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    tele:{
        type:Number,
        required:true,
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
const Employe=mongoose.model("employe",Employes)
module.exports=Employe
