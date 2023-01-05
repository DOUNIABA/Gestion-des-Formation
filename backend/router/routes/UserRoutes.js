
const router=require('express').Router()
const {GetAllUsers,CreateEmployee}=require('../../controller/UserController')


router.get('/allusers',GetAllUsers)
router.post('/createemploye',CreateEmployee)
module.exports= router