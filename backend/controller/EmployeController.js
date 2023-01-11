const Employe=require('../model/EmployeModel')
const bcrypt=require('bcryptjs')

const GetEmployes= async (req,res)=>{
  const employe=await Employe.find()
    res.json(employe)
}

const CreateEmployes=async (req,res)=>{
 const {body}=req
 const employe = await Employe.findOne({email:body.email})
 if(employe) res.send('existe déja')
 const add= await Employe.create({...body})
 if(!add) res.send('not created')
 res.send('created')
}
const getEmp= async (req,res)=>{
  const {id}= req.body
 const emp= await Employe.findOne({_id:id})
   res.json({
    msg:"data",
    data:emp,
  })
}

const UpdateEmploye=async (req,res)=>{
  const id = req.params.id
  const {body}=req
  const employe= await Employe.updateOne(id,{...body})
  if(employe) res.send('updated')
  res.send("not updated")
}

const DeleteEmploye= async (req,res)=>{
  const id =req.params.id
  const employe= await Employe.deleteOne({id})
  if(employe)
  res.json("deleted")
}

module.exports={GetEmployes,CreateEmployes,UpdateEmploye,DeleteEmploye,getEmp}
