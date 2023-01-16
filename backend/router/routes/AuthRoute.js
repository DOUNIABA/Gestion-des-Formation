const router=require('express').Router()

const {signin,signup,Logout}=require('../../controller/AuthController')

router.post('/login',signin)
router.post('/register',signup)
router.get('/logout',Logout)

module.exports= router