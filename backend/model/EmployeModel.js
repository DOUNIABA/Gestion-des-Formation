
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

}
)
const Employe=mongoose.model("employe",Employes)
module.exports=Employe
