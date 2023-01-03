const router=require('express').Router()

const {GetAllFormation,CreateFormation,UpdateFormation,DeleteFormation}=require('../../controller/FormationController')

router.get('/allformation',GetAllFormation)
router.post('/createformation',CreateFormation)
router.post('/updateformation',UpdateFormation)
router.post('/deletformation',DeleteFormation)

module.exports= router
