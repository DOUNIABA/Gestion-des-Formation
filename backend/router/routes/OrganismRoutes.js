const router=require('express').Router()

const {GetAllOrganisme,CreateOrganisme,UpdateOrganisme,DeleteOrganisme}=require('../../controller/OrganismeController')

router.get('/allorganisme',GetAllOrganisme)
router.post('/createorganisme',CreateOrganisme)
router.post('/updateorganisme',UpdateOrganisme)
router.post('/deletorganisme',DeleteOrganisme)

module.exports=router