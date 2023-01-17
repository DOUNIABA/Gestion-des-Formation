
const router=require('express').Router()
const {CreateEmployes,getEmp,GetEmployes,UpdateEmploye,DeleteEmploye}=require('../../controller/EmployeController')

router.get('/allemployes',GetEmployes)
router.post('/createemployes',CreateEmployes)
router.put('/update/:id',UpdateEmploye)
router.delete('/delete',DeleteEmploye)
router.get('/OneEmployee/:id',getEmp)

module.exports= router
