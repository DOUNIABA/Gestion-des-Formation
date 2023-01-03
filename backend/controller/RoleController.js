const Role= require('../model/RoleModel')

const GetAllRole= async ()=>{
    const role= await Role.find()
    res.json(role)
}
module.exports={GetAllRole}