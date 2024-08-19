const express= require('express')
const router=express.Router()
const sendMail=require('../controllers/email')

router.get('/sendMail',sendMail)

module.exports=router