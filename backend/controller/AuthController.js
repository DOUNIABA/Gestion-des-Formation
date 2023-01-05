
const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const localstorage=require('local-storage')

const signin= async (req,res)=>{
    const {body}=req
    const users = await User.findOne({email:body.email})
    if(!users) res.send('user not found')
    //const password= await bcrypt.compare(body.password, users.password)
    // if(!password) res.send('password not valid')
    const token= await jwt.sign({users},process.env.SECRET)
    if(!token) res.send('token not validated')
    localstorage('token',token)
    const tokenverif=await jwt.verify(localstorage('token'),process.env.SECRET) 
    if(!tokenverif) res.send('token not valid')
    res.send(token)

}

module.exports={signin}