
const router=require('express').Router()
const {CreateEmployes,GetEmployes,UpdateEmploye,DeleteEmploye}=require('../../controller/EmployeController')

router.get('/allemployes',GetEmployes)
router.post('/createemployes',CreateEmployes)
router.put('/:id',UpdateEmploye)
router.delete('/:id',DeleteEmploye)

module.exports= router
