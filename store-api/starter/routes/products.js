const express=require('express')
const router=express.Router()
const {getAllProductsStatic,getAllProducts,getProductById}=require('../controllers/products')

router.get('/static',getAllProductsStatic)
router.get('/',getAllProducts)
router.get('/:id',getProductById)

module.exports=router