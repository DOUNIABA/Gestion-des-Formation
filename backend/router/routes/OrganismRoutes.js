const router=require('express').Router()

const {GetAllOrganisme,getOrg,CreateOrganisme,UpdateOrganisme,DeleteOrganisme}=require('../../controller/OrganismeController')

router.get('/allorganisme',GetAllOrganisme)
router.post('/createorganisme',CreateOrganisme)
router.put('/update/:id',UpdateOrganisme)
router.delete('/delete',DeleteOrganisme)
router.get('/OneOrganisme/:id',getOrg)

module.exports=router