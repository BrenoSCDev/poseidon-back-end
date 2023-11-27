const Router = require('express')
const userController =  require('../controllers/user')
const verifyToken = require('../middlewares/authorization');

const router = Router()

router.post(('/'), userController.createUser)
router.get(('/'), userController.getAllUsers)
router.get(('/:id'), userController.getUserById)
router.put(('/:id'), userController.updateUser)
router.delete(('/:id'), userController.deleteUser)

module.exports = router
