const Role= require('../model/RoleModel')

const GetAllRole= async ()=>{
    const role= await Role.find()
    res.json(role)
}

const CreateRole= async (req,res)=>{
    const {body}=req
    const role= await Role.create({...body})
    if(!role) res.send('not created')
    res.send('created')
}
module.exports={GetAllRole,CreateRole}