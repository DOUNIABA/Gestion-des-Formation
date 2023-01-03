
const Formation=require('../model/FormationModel')

const GetAllFormation= async ()=>{

    const formation=await Formation.find()
    res.json(formation)

}

const CreateFormation=async (req,res)=>{
    const formation= await Formation.create()
    res.json(formation)

}

const UpdateFormation= ()=>{
    res.json({msg:""})
}

const DeleteFormation=  ()=>{
 
    res.json({msg:""})
}

module.exports={GetAllFormation,CreateFormation,UpdateFormation,DeleteFormation}