
const User=require('../model/UserModel')

const GetAllUsers= async ()=>{
    const user=await User.find()

    res.json(user)
}
module.exports={GetAllUsers}