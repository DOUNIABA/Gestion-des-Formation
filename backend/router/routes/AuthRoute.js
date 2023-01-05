const router=require('express').Router()

const {signin,signup}=require('../../controller/AuthController')

router.post('/login',signin)
router.post('/register',signup)

module.exports= router