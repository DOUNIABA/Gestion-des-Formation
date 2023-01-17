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
    organisme:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Organisme'
    }
    
})

const Session=mongoose.model("session",Sessions)
module.exports=Session
