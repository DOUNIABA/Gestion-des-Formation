
const router=require('express').Router()
const {CreateEmployes,getEmp,GetEmployes,UpdateEmploye,DeleteEmploye}=require('../../controller/EmployeController')
const {verify} = require ('../../Middelwares/verificationToken')

router.get('/allemployes',verify(),GetEmployes)
router.post('/createemployes',CreateEmployes)
router.put('/update/:id',UpdateEmploye)
router.delete('/delete',DeleteEmploye)
router.get('/OneEmployee/:id',getEmp)

module.exports= router
