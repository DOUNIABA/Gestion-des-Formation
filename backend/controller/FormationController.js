const Formation=require('../model/FormationModel')

const GetAllFormation= async (req,res)=>{
    const formation=await Formation.find()
    res.send(formation)
}

const CreateFormation=async (req,res)=>{
    const {body}=req
    const formation= await Formation.create({...body})
    if(formation) res.status(200).send("created")
    else res.status(400).send("not created")
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
    if(formation) res.status(200).send('updated')
    else res.status(400).send("not updated")
}

const DeleteFormation= async (req,res)=>{
    const id =req.params.id
    const formation= await Formation.deleteOne({id})
    if(formation)
    res.status(200).send("deleted")
    else  res.status(404).send("deleted")
    
}

module.exports={GetAllFormation,CreateFormation,UpdateFormation,DeleteFormation,getForm}
