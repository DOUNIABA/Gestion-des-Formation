
const mongoose=require('mongoose')

const Sessions= new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    formation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Formation'
    }
})

const Session=mongoose.model("session",Sessions)
module.exports=Session
