const Router = require('express')
const userController =  require('../controllers/user')
const verifyToken = require('../middlewares/authorization');

const router = Router()

router.post(('/'), userController.createUser)
router.get(('/'), verifyToken, userController.getAllUsers)
router.get(('/:id'), verifyToken, userController.getUserById)
router.put(('/:id'), verifyToken, userController.updateUser)
router.delete(('/:id'), verifyToken, userController.deleteUser)

module.exports = router
