
const express=require('express')
const route=express.Router()
const users=require('../users')
const getUsers=require('../controllers/controllers')

route.get('/allusers',getUsers)

module.exports=route