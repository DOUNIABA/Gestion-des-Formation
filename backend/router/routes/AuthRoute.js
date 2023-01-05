const router=require('express').Router()

const {signin}=require('../../controller/AuthController')

router.post('/login',signin)

module.exports= router