
const router=require('express').Router()
const {GetAllUsers}=require('../../controller/UserController')


router.get('/allusers',GetAllUsers)

module.exports= router