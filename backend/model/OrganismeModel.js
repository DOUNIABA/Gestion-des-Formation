const mongoose=require('mongoose')

const OrganismeSchema=new mongoose.Schema({

    name:{
        type:String,
    },
    address:{
        type:String
    },

})
const Organisme=mongoose.model('organisme',OrganismeSchema)
module.exports=Organisme
