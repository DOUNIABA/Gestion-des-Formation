
const Formation=require('../model/FormationModel')

const GetAllFormation= async (req,res)=>{

    const formation=await Formation.find()
    res.json(formation)
}

const CreateFormation=async (req,res)=>{
    const {body}=req
    const formation= await Formation.create({...body})
    if(!formation) res.json({msg:"not created"})
    res.json(formation)
}

const UpdateFormation=async (req,res)=>{
    const id = req.params.id
    const {body}=req
    const formation= await Formation.updateOne(id,{...body})
    if(formation) res.send('updated')
    res.json({msg:""})
}

const DeleteFormation= async (req,res)=>{
    const id =req.params.id
    const formation= await Formation.deleteOne({id})
    if(formation)
    res.json("deleted")
}

module.exports={GetAllFormation,CreateFormation,UpdateFormation,DeleteFormation}