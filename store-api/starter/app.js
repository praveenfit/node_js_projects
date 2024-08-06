const express=require('express')
const app=express()
const connecDB=require('./db/connection')
const productsRoute=require('./routes/products')
require('dotenv').config()

const port=process.env.PORT || 3000


const notFound=require('./middleware/notFound')
const errorHandler=require('./middleware/errorHandler') 

// middleware
app.use(express.json())

//routes

app.get('/',(req,res)=>{
    res.send('<h1>store api</h1> <a href = "/api/v1/products">products route')
})



app.use('/api/v1/products',productsRoute)


 
app.use(errorHandler)
app.use(notFound)



const start=async()=>{
    try {
    await connecDB(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log(`server is running at ${port}`)
    })

    } catch (error) {
        console.log(error)
        
    }
}
start()