// create sample express app
const connectDB=require('./db/connection')

require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const taskRouter=require('./Routes/tasks')

app.use(express.json())

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