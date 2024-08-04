// create sample express app
const connectDB=require('./db/connection')

require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const taskRouter=require('./Routes/tasks')
const notFound=require('./middleware/notFound')
const {errorMiddleware}=require('./middleware/errorMiddleware')
app.use(express.json())
app.use(errorMiddleware)
app.use(notFound.notFound)
app.use()
app.use('/api/v1/tasks',taskRouter)



const start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()