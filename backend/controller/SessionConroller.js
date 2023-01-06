
const User = require('../model/EmployeModel')
const Session = require('../model/SessionModel')
const User=require('../model/EmployeModel')
const Formation=require('../model/FormationModel')

const GetAllSession=async ()=>{
    const session= await Session.find()
    .populate([
        {
        path:"user_id",
        model:User
    },
      {
        path:"formation_id",
        model:Formation
    }
   ])
    res.json(session)
}

const CreateSession= async ()=>{
    const {body}=req
    const session=await Session.create({...body})
    if(!session) res.send('not created')
    res.send(session)
}

module.exports={GetAllSession,CreateSession}
