const Formation=require('../model/FormationModel')

const GetAllFormation= async (req,res)=>{
    const formation=await Formation.find()
    res.send(formation)
}

const CreateFormation=async (req,res)=>{
    const {body}=req
    const formation= await Formation.create({...body})
    if(!formation) res.send("not created")
    res.send(formation)
}

const getForm= async (req,res)=>{
    const {id}= req.params
    const form= await Formation.findOne({_id:id})
   res.send(form)
  }

const UpdateFormation=async (req,res)=>{
    const id = req.params.id
    const {body}=req
    const formation= await Formation.updateOne({_id:id},{...body})
    if(formation) res.send('updated')
    else res.send("not updated")
}

const DeleteFormation= async (req,res)=>{
    const id =req.params.id
    const formation= await Formation.deleteOne({id})
    if(formation)
    res.send("deleted")
}

module.exports={GetAllFormation,CreateFormation,UpdateFormation,DeleteFormation,getForm}
