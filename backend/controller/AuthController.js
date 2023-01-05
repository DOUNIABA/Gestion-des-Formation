const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const localstorage=require('local-storage')

const signin = async (req,res)=>{
    const {body}=req
    const users = await User.findOne({email:body.email})
    if(!users) res.send('user not found')
    const password= await bcrypt.compare(body.password, users.password)
    if(!password) res.send('password not valid')
    const token= await jwt.sign({users},process.env.SECRET)
    if(!token) res.send('token not validated')
    localstorage('token',token)
    const tokenverif=await jwt.verify(localstorage('token'),process.env.SECRET) 
    if(!tokenverif) res.send('token not valid')
    res.send(token)
}

const signup = async (req,res)=>{
    const {body}=req
    localstorage('email',body.email)
    const user= await User.findOne({email:body.email})
    if(user) res.send('user exist already')
    const salt = await bcrypt.genSalt(10);
    const pass= await bcrypt.hash(body.password,salt)
    body.password=pass
    const creat= await User.create({...body})
    if(!creat) res.send('user not created')
    res.json({msg:"created",
        data:creat
    })
}


module.exports={signin,signup}