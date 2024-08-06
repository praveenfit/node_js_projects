const product=require('../model/products')

const getAllProductsStatic=async(req,res)=>{
    const items=produsts.find({})
    .sort('name')
    .select('name price')
    .limit(10)
    .skip(5)
    res.send('getting all products testing')
}

const getAllProducts=async(req,res)=>{
    const Query=req.query
    const items=await product.find(Query)

    res.json(items)
}

const getProductById=async(req,res)=>{
    const id=req.params.id
    const items=await product.findById(id)
    if(!product){
        res.status(404).json({message:"product not found"})
        return 
    }
    res.json(items)

}
module.exports={getAllProductsStatic,getAllProducts,getProductById}