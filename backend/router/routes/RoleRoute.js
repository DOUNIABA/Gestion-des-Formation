const router=require('express').Router()

const {GetAllRole,CreateRole}=require('../../controller/RoleController')

router.get('/allrole',GetAllRole)
router.post('/createrole',CreateRole)



module.exports=router