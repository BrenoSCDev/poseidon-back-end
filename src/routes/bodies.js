const Router = require('express')
const bodyController =  require('../controllers/bodies')
const verifyToken = require('../middlewares/authorization')

const router = Router()

router.use(verifyToken)

router.post(('/'), bodyController.createBodyOccurrence)
router.get(('/'), bodyController.getAllBodyOccurrences)
router.get(('/:id'), bodyController.getBodyOccurrenceById)
router.put(('/:id'), bodyController.updateBodyOccurrence)
router.put(('/finish/:id'), bodyController.updateOccurrenceStatus)
router.delete(('/:id'), bodyController.deleteBodyOccurrence)

module.exports = router