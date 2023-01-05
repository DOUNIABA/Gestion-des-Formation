
const router=require('express').Router()
const {CreateEmployes,GetEmployes}=require('../../controller/EmployeController')

router.get('/allemployes',GetEmployes)
router.post('/createemployes',CreateEmployes)
module.exports= router
