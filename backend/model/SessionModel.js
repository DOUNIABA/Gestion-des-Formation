
const mongoose=require('mongoose')

const SessionSchema= new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    formation_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Formation'
    }
})

const Session=mongoose.model("session",SessionSchema)
module.exports=Session
