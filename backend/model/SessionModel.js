
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
    date_debut:{
        type:Date,
    },
    date_fin:{
        type:Date,
    }
})

const Session=mongoose.model("session",Sessions)
module.exports=Session
