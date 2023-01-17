const Session = require('../model/SessionModel')
const Employe=require('../model/EmployeModel')
const Formation=require('../model/FormationModel')
const Organisme=require('../model/OrganismeModel')

const GetAllSession=async (req,res)=>{
    const session= await Session.find()
    .populate([
        {
        path:"employe",
        model:Employe
    },
      {
        path:"formation",
        model:Formation
    },
    {
        path:"organisme",
        model:Organisme
    }

   ])
    res.send(session)
}

const CreateSession= async (req,res)=>{
    const {body}=req
    const session = await Session.create({...body})
    if(!session) res.json({msg:'not created'})
    res.json(session)
}
module.exports={GetAllSession,CreateSession}