const produst=require('../model/productModel')

const createProduct=async (req,res)=>{
    try {
        res.send("product created")
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}

const getProducts=async (req,res)=>{
    try {
        res.send("product fetch")
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}

module.exports={createProduct,getProducts}