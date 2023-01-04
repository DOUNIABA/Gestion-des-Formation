
const User=require('../model/UserModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const localstorage=require('local-storage')

const login=(req,res)=>{
    const {body}=req
    const email = await User.findOne({email:body.email})
    if(!email) res.send('user not found')

}

module.exports={login}