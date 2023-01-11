const router=require('express').Router()

const {GetAllFormation,getForm,CreateFormation,UpdateFormation,DeleteFormation}=require('../../controller/FormationController')

router.get('/allformation',GetAllFormation)
router.post('/createformation',CreateFormation)
router.put('/update',UpdateFormation)
router.delete('/delete',DeleteFormation)
router.get('/OneFormation',getForm)

module.exports= router
