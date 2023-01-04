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

const UpdateOrganisme= async (req,res)=>{
    const id = req.params.id
    const {body}=req
    const organisme= await Organisme.updateOne(id,{...body})
    if(organisme) res.send('updated')
    res.send('not updated')

}

const DeleteOrganisme=async (req,res)=>{
    const id =req.params.id
    const organisme= await Organisme.deleteOne({id})
    if(organisme)
    res.send('deleted')
}


module.exports={GetAllOrganisme,CreateOrganisme,UpdateOrganisme,DeleteOrganisme}