const router=require('express').Router()

const {GetAllFormation,CreateFormation,UpdateFormation,DeleteFormation}=require('../../controller/FormationController')

router.get('/allformation',GetAllFormation)
router.post('/createformation',CreateFormation)
router.put('/:id',UpdateFormation)
router.delete('/:id',DeleteFormation)

module.exports= router
