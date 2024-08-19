const express =require('express')
const router = express.Router()
const {login,dashboard}=require('../controllers/jwt')
const authmiddleware=require('../middleware/auth')

router.post('/login',login)
router.get('/dashboard',authmiddleware,dashboard)
module.exports = router;