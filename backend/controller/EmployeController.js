const Employe=require('../model/EmployeModel')
const bcrypt=require('bcryptjs')

const GetEmployes= async (req,res)=>{
  const employe=await Employe.find()
    res.send(employe)
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
  const {id}= req.params
  const emp= await Employe.findOne({_id:id})
  res.send(emp)
}

const UpdateEmploye=async (req,res)=>{
  const id = req.params.id
  const {body}=req
  const employe= await Employe.updateOne({_id:id},{...body})
  if(employe) res.send('updated')
  else res.send("not updated")
}

const DeleteEmploye= async (req,res)=>{
  const id =req.params.id
  const employe= await Employe.deleteOne({id})
  if(employe)
  res.send("deleted")
}

module.exports={GetEmployes,CreateEmployes,UpdateEmploye,DeleteEmploye,getEmp}
