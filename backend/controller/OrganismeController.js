const Organisme=require  ("../model/OrganismeModel");

const GetAllOrganisme= async (req,res)=>{
    const organisme= await Organisme.find()
    res.json(organisme)
}

const CreateOrganisme=(req,res)=>{
    const {body}=req
    const organisme= Organisme.create({...body})
    if(!organisme) res.json({msg:"not created"})
    res.json(organisme)
}

const UpdateOrganisme= async ()=>{
    const {id}=req.body
    const organisme= await Organisme.findOne({_id:id})
    res.json({msg:""})
}

const DeleteOrganisme=()=>{

    res.json({msg:""})
}


module.exports={GetAllOrganisme,CreateOrganisme,UpdateOrganisme,DeleteOrganisme}