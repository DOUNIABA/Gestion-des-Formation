const Admin=require('../model/AdminModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv = require("dotenv")
const localstorage=require('local-storage')

 const signin = async (req,res)=>{
    const {body}=req

    const user = await Admin.findOne({email:body.email})
    if(!user) res.json({msg:'user not found'})
    
    const password= await bcrypt.compare(body.password, user.password)
    if(!password) res.json({msg:'password not valid'})
    
    const token= await jwt.sign({user},process.env.SECRET)
    if(!token) res.json({msg:'token not valida'})
    
    localstorage('token',token)
    const tokenverif=await jwt.verify(localstorage('token'),process.env.SECRET) 
    if(!tokenverif) res.json({msg:"token not valid"})
    res.json({token:token,name:user.name})
    
}

 const signup = async (req,res)=>{
    const {body}=req

    localstorage('email',body.email)
    const user= await Admin.findOne({email:body.email})
    if(user) res.json('user exist already')
    const salt = await bcrypt.genSalt(10);
    const pass= await bcrypt.hash(body.password,salt)
    body.password=pass
    const creat= await Admin.create({...body})
    if(!creat) res.json('user not created')
    res.json({msg:"created",
        data:creat
    })
}

const Logout = async (req, res) => {
    localstorage.clear();
    res.send("Logout");
  };

module.exports={signin,signup,Logout}