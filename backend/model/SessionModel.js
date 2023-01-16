const mongoose=require('mongoose')

const Sessions= new mongoose.Schema({
    
    employe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employe'
    },

    formation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Formation'
    },

    
})

const Session=mongoose.model("session",Sessions)
module.exports=Session
