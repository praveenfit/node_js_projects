const express = require('express')
const router = express.Router()

const {createProduct,getProducts}=require('../controllers/productControllers')
const {uploadProductImage}=require('../controllers/uploadControlles')
router.get('/getProduct',getProducts)
router.post('/createProduct',createProduct)

router.post('/uploadImage',uploadProductImage)

module.exports={router}