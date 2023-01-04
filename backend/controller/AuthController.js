
const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const localstorage=require('local-storage')

const signin=async (req,res)=>{
    const {body}=req
    const email = await User.findOne({email:body.email})
    if(!email) res.send('user not found')
    const password= await bcrypt.compare(body.password, email.password)
    if(!password) res.send('password not valid')

    const token= await jwt.sign({email},process.env.SECRET)
    if(!token) res.send('token not validated')

    localstorage('token',token)
    const tokenverif=await jwt.verify(localstorage('token'),process.env.SECRET) 
    if(!tokenverif) res.send('tont not valid')
    res.send('logged')

}

module.exports={signin}