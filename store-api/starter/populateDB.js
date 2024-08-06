require('dotenv').config()
const mongoose=require('mongoose')
const jsonProducts=require('./products.json')
const connectDB=require('./db/connection')
const product=require('./model/products')


const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await product.deleteMany({})
        await product.create(jsonProducts)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}
start()