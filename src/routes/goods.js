const Router = require('express')
const goodsController =  require('../controllers/goods')
const verifyToken = require('../middlewares/authorization')

const router = Router()

// router.use(verifyToken)

router.post(('/'), goodsController.createGood)
router.get(('/'), goodsController.getAllGoods)
router.get(('/:id'), goodsController.getGoodById)
router.put(('/:id'), goodsController.updateGood)
router.put(('/finish/:id'), goodsController.updateOccurrenceStatus)
router.delete(('/:id'), goodsController.deleteGood)

module.exports = router