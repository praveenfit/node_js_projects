require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const {dbconnection}=require('./db/books')
const router=require('./routes/books')
const { swaggerDocs, swaggerUi } = require('./swaggerUI');
const app=express()
app.use(express.json())
app.use('/books/v1/api',router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
const port=process.env.PORT || 3000
const start = async()=>{
    try {
        await dbconnection(process.env.MONGO_URI)
        console.log('connected to database')
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)   
    }
}

start()