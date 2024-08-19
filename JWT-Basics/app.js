const express=require('express')
const app=express()
const port= 3000
const router=require('./routes/jwt')
app.use(express.json())
app.use('/api/v1/jwt',router)
const start=async()=>{
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()
