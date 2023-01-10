const User=require('../model/EmployeModel')
const bcrypt=require('bcryptjs')

const GetEmployes= async (req,res)=>{
  const user=await User.find()
    res.json(user)
}

const CreateEmployes=async (req,res)=>{""
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

const UpdateEmploye=async (req,res)=>{
  const id = req.params.id
  const {body}=req
  const formation= await User.updateOne(id,{...body})
  if(formation) res.send('updated')
  res.json({msg:""})
}

const DeleteEmploye= async (req,res)=>{
  const id =req.params.id
  const formation= await Formation.deleteOne({id})
  if(formation)
  res.json("deleted")
}

module.exports={GetEmployes,CreateEmployes,UpdateEmploye,DeleteEmploye}
