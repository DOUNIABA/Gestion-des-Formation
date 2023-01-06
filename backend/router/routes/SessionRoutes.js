
const router=require('express').Router()
const {CreateSession,GetAllSession}=require('../../controller/SessionConroller')

router.get('/allsession',GetAllSession)
router.post('/createsession',CreateSession)
module.exports= router

