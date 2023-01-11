const router=require('express').Router()

const {GetAllOrganisme,getOrg,CreateOrganisme,UpdateOrganisme,DeleteOrganisme}=require('../../controller/OrganismeController')

router.get('/allorganisme',GetAllOrganisme)
router.post('/createorganisme',CreateOrganisme)
router.put('/update',UpdateOrganisme)
router.delete('/delete',DeleteOrganisme)
router.get('/OneOrganisme',getOrg)

module.exports=router