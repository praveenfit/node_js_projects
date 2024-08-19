require('dotenv').config()
const express=require('express')
const app=express()
const {router}=require('./routes/productsRoutes')
const dbConnect=require('./db/productConnection')
const fileUpload=require('express-fileupload')
app.use(express.json())
app.use(fileUpload())
app.use('/api/v1/uploadProducts',router)
const port=process.env.PORT
const start=async(req,res)=>{
    try {
        await dbConnect(process.env.MONGO_URI)
        console.log('connected to database')
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
        })
    } catch (error) {
        
    }
}

start()