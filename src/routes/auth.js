const Router = require('express')
const authController =  require('../controllers/auth')

const router = Router()

router.post(('/'), authController)
module.exports = router