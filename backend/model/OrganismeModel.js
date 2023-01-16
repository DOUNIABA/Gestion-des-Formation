const mongoose=require('mongoose')

const Organismes=new mongoose.Schema({

    name:{
        type:String,
    },
    address:{
        type:String
    }
})
const Organisme=mongoose.model('organisme',Organismes)
module.exports=Organisme
