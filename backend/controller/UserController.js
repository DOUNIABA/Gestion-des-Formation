
const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')

const GetAllUsers= async ()=>{
    const user=await User.find()
    res.json(user)
}

const CreateEmployee=async (req,res)=>{
 const {body}=req
 
 const user = await User.findOne({email:body.email})
 if(user) res.send('existe déja')
 const salt = await bcrypt.genSalt(10)
 const pass=await bcrypt.hash(body.password,salt)
 body.password=pass
 const add= await User.create({...body})
 if(!add) res.send('not created')
 res.send('created')
}

module.exports={GetAllUsers,CreateEmployee}
